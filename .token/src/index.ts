import {
    nat64,
    Record,
    update,
    ic,
    StableBTreeMap,
    Vec,
    Canister,
    text,
    bool,
    query,
    Opt,
    Principal,
    Variant,
    Err,
    Ok,
    Result,
} from 'azle';

const FREE_TOKEN = 1_000n;
const BURNING_ACCOUNT_ID = Principal.fromUint8Array(new Uint8Array([0]));

const Allowances = Record({
    spender: Principal,
    amount: nat64,
});

const Account = Record({
    address: Principal,
    balance: nat64,
    allowances: Vec(Allowances),
});
//key: address

const tokenInfo = Record({
    name: text,
    ticker: text,
    totalSupply: nat64,
    owner: Principal,
});

let state = StableBTreeMap(Principal, Account, 0); // stable memory
const admins: Vec<Principal> = [];

const TokenError = Variant({
    OnlyAdminAccess: Principal,
    AccountDoesNotExist: Principal,
    InsufficientToken: Principal,
});

export default Canister({
    initialize: update([text, text, nat64], Result(Principal, TokenError), (name, ticker, totalSupply) => {
        const caller = getCaller();

        if (caller !== tokenInfo.owner && !tokenInfo.owner) {
            return Err({
                OnlyAdminAccess: caller,
            });
        }

        const creatorAccount: typeof Account = {
            address: caller,
            balance: totalSupply,
            allowances: [],
        };

        tokenInfo.totalSupply = totalSupply;
        tokenInfo.owner = caller;
        tokenInfo.name = name;
        tokenInfo.ticker = ticker;

        insertAccount(caller, creatorAccount);
        admins.push(caller);

        return Ok(caller);
    }),

    connectAcount: update([], bool, () => {
        const user = getCaller();
        if (!findAccount(user)) {
            generateWallet(user);
        }
        return true;
    }),

    allState: query([], Vec(Account), () => {
        return state.values();
    }),

    getAdmins: query([], Vec(Principal), () => {
        return admins;
    }),

    addAdmins: update([Principal], bool, (address) => {
        const caller = getCaller();

        if (!isAdmin(caller)) {
            return false;
        }

        admins.push(address);
        return true;
    }),

    deleteAdmins: update([Principal], bool, (address) => {
        const caller = getCaller();

        if (tokenInfo.owner != caller) {
            return false;
        }

        const indexToDelete = admins.indexOf(address);
        if (indexToDelete !== -1) {
            admins.splice(indexToDelete, 1);
        }

        return true;
    }),

    name: query([], text, () => {
        return tokenInfo.name;
    }),

    ticker: query([], text, () => {
        return tokenInfo.ticker;
    }),

    totalSupply: query([], nat64, () => {
        return tokenInfo.totalSupply;
    }),

    owner: query([], Principal, () => {
        return tokenInfo.owner;
    }),

    balanceOf: query([Principal], Result(nat64, TokenError), (address) => {
        const accountOpt = getAccountByAddress(address);
        if ('None' in accountOpt) {
            return Err({
                AccountDoesNotExist: address,
            });
        }
        return Ok(accountOpt.Some.balance);
    }),

    // * TODO : CHECK
    transferReward: update([Principal, nat64], Result(bool, TokenError), (to, amount) => {
        const adminAccountOpt = getAccountByAddress(tokenInfo.owner);
        if ('None' in adminAccountOpt) {
            return Err({
                AccountDoesNotExist: tokenInfo.owner,
            });
        }
        const adminAccount = adminAccountOpt.Some;
        const toAccountOpt = getAccountByAddress(to);
        if ('None' in toAccountOpt) {
            return Err({
                AccountDoesNotExist: to,
            });
        } else {
            const toAccount = toAccountOpt.Some;
            toAccount.balance += amount;
            adminAccount.balance -= amount;
            insertAccount(to, toAccount);
            insertAccount(tokenInfo.owner, adminAccount);
            return Ok(true);
        }
    }),

    // * TODO : CHECK
    payToAdmin: update([nat64], Result(bool, TokenError), (amount) => {
        const fromAddress = getCaller();
        const fromAccountOpt = getAccountByAddress(fromAddress);
        if ('None' in fromAccountOpt) {
            return Err({
                AccountDoesNotExist: fromAddress,
            });
        }
        const fromAccount = fromAccountOpt.Some;
        const bigIntAmount = BigInt(amount);
        if (!fromAccount || fromAccount.balance < bigIntAmount) {
            return Ok(false);
        }
        const adminAccountOpt = getAccountByAddress(tokenInfo.owner);
        if ('None' in adminAccountOpt) {
            return Err({
                AccountDoesNotExist: tokenInfo.owner,
            });
        }
        const adminAccount = adminAccountOpt.Some;
        fromAccount.balance -= bigIntAmount;
        adminAccount.balance += bigIntAmount;
        insertAccount(fromAddress, fromAccount);
        insertAccount(tokenInfo.owner, adminAccount);
        return Ok(true);
    }),

    // * TODO : CHECK
    mint: update([Principal, nat64], Result(bool, TokenError), (to, amount) => {
        const caller = getCaller();
        // mint 함수는 admin인 계정만 호출할 수 있습니다.
        if (caller != tokenInfo.owner) {
            return Err({
                OnlyAdminAccess: caller,
            });
        }
        const toAccountOpt = getAccountByAddress(to);
        if ('None' in toAccountOpt) {
            const newAccount: typeof Account = {
                address: to,
                balance: amount,
                allowances: [],
            };
            insertAccount(to, newAccount);
        } else {
            const toAccount = toAccountOpt.Some;
            toAccount.balance += amount;
            insertAccount(to, toAccount);
        }

        tokenInfo.totalSupply += amount; // 전체 발행된 토큰의 양 추가

        return Ok(true);
    }),

    // * TODO : CHECK
    /* burn: update([Principal, nat64], Result(bool, TokenError), (from, amount) => {
        const caller = getCaller();
        // burn 함수는 admin인 계정만 호출할 수 있습니다.
        if (caller !== tokenInfo.owner) {
            return Err({
                OnlyAdminAccess: caller,
            });
        }

        const fromAccountOpt = getAccountByAddress(from);
        if ('None' in fromAccountOpt) {
            return Err({
                AccountDoesNotExist: from,
            });
        }
        const fromAccount = fromAccountOpt.Some;

        if (fromAccount.balance < amount) {
            return Err({
                InsufficientToken: from,
            });
        }
        // from에서 0이라는 주소(없는 ㅈ소)로 amount 보내기
        let burningAccount;
        const burningAccountOpt = getAccountByAddress(BURNING_ACCOUNT_ID);
        if ('None' in burningAccountOpt) {
            const newBurningAccount: typeof Account = {
                address: BURNING_ACCOUNT_ID,
                balance: 0n,
            };
            burningAccount = insertAccount(BURNING_ACCOUNT_ID, newBurningAccount);
        } else {
            burningAccount = burningAccountOpt.Some;
        }

        burningAccount.balance += amount;
        fromAccount.balance -= amount;
        tokenInfo.totalSupply -= amount; // 전체 토큰에서 양 빼기

        insertAccount(from, fromAccount);
        insertAccount(BURNING_ACCOUNT_ID, burningAccount);
        return Ok(true);
    }),
*/
    allowance: query([Principal, Principal], nat64, (owner, spender) => {
        return _allowance(owner, spender);
    }),

    allowanceFrom: query([Principal], nat64, (owner) => {
        const spender = getCaller();
        const spenderAccount = getAccountByAddress(spender);
        if ('None in spenderAccount') {
            return 0n;
        } else {
            return _allowance(owner, spender);
        }
    }),
});

function isAdmin(address: Principal): boolean {
    if (admins.indexOf(address) == -1) {
        return false;
    }
    return true;
}

function getCaller(): Principal {
    const caller = ic.caller();
    if (caller === null) {
        throw new Error('Caller is null');
    }
    return caller;
}

function getAccountByAddress(address: Principal): Opt<typeof Account> {
    return state.get(address);
}

function findAccount(address: Principal): bool {
    const AccountOpt = getAccountByAddress(address);
    if ('None' in AccountOpt) {
        return false;
    }
    return true;
}

function insertAccount(address: Principal, account: typeof Account): typeof Account {
    state.insert(address, account);
    const newAccountOpt = getAccountByAddress(address);
    if ('None' in newAccountOpt) {
        throw new Error('Insert failed');
    }
    return newAccountOpt.Some;
}

function _allowance(owner: Principal, spender: Principal): nat64 {
    const ownerAccountOpt = getAccountByAddress(owner);
    if ('None' in ownerAccountOpt) {
        throw new Error('Owner account not found');
    }
    const ownerAccount = ownerAccountOpt.Some;

    for (let allowance of ownerAccount.allowances) {
        if (allowance.spender == spender) {
            return allowance.amount;
        }
    }
    return 0n;
}

function _transferFrom(from: Principal, to: Principal, amount: nat64): bool {
    const spender = getCaller();
    const spenderAccountOpt = getAccountByAddress(spender);
    if ('None' in spenderAccountOpt) {
        throw new Error('Spender account not found');
    }
    const spenderAccount = spenderAccountOpt.Some;

    const fromAccountOpt = getAccountByAddress(from);
    if ('None' in fromAccountOpt) {
        throw new Error('From account not found');
    }
    const fromAccount = fromAccountOpt.Some;

    //* TODO: findOrCreate 함수화
    let toAccount: typeof Account;
    const toAccountOpt = getAccountByAddress(to);
    if ('None' in toAccountOpt) {
        const newToAccount = {
            address: to,
            balance: 0n,
            allowances: [],
        };
        toAccount = insertAccount(to, newToAccount);
    } else {
        toAccount = toAccountOpt.Some;
    }

    const allowance = _allowance(from, spender);

    if (allowance === undefined || allowance < amount) {
        return false;
    }

    fromAccount.allowances = fromAccount.allowances.map((item) =>
        item.spender === spender ? { spender: spender, amount: item.amount - amount } : item
    );

    fromAccount.balance -= amount;
    toAccount.balance += amount;
    insertAccount(from, fromAccount);
    insertAccount(to, toAccount);

    return true;
}

function generateWallet(address: Principal): bool {
    const newWallet: typeof Account = {
        address: address,
        balance: BigInt(FREE_TOKEN),
        allowances: [],
    };
    // * TODO: 계정 만들어질 때 minting이 아니라서, totalSupply가 늘면 안되는데? -> 난 민팅해서해! 으하하
    tokenInfo.totalSupply += newWallet.balance;
    insertAccount(address, newWallet);
    return true;
}

// ??
/*
function findOrCreateWallet(address: Principal): bool {
    let tempAccount: typeof Account;
    const AccountOpt = getAccountByAddress(address);
    if ('None' in AccountOpt) {
        const newAccount = {
            address: Principal,
            balance: FREE_TOKEN,
            allowances: [],
        };
        tempAccount = insertAccount(address, newAccount);
    } else {
        tempAccount = AccountOpt.Some;
    }
}
*/
