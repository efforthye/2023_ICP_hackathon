import { nat64, Record, update, ic, StableBTreeMap, Vec, Canister, text, bool, query, Opt } from 'azle';

export const Account = Record({
    address: text,
    balance: nat64,
});
let state = StableBTreeMap(text, Account, 0); // stable memory
//key: address
const admins: Vec<string> = [];

const tokenInfo = {
    name: '',
    ticker: '',
    totalSupply: 0n,
    owner: '',
};

function isAdmin(address: string): boolean {
    return admins.indexOf(address) !== -1;
}

function getCaller(): string {
    const caller = ic.caller().toString();
    if (caller === null) {
        throw new Error('Caller is null');
    }
    return caller;
}

function getAccountByAddress(address: text): Opt<typeof Account> {
    return state.get(address);
}

function insertAccount(address: text, account: typeof Account): typeof Account {
    state.insert(address, account);
    const newAccountOpt = getAccountByAddress(address);
    if ('None' in newAccountOpt) {
        throw new Error('Insert failed');
    }
    return newAccountOpt.Some;
}

export default Canister({
    initialize: update([text, text, nat64], text, (name, ticker, totalSupply) => {
        const ownerAddress = getCaller();
        if (ownerAddress !== tokenInfo.owner && tokenInfo.owner !== '') {
            throw new Error('Only admin can initialize');
        }
        const creatorAccount: typeof Account = {
            address: ownerAddress,
            balance: totalSupply,
        };
        tokenInfo.name = name;
        tokenInfo.ticker = ticker;
        tokenInfo.totalSupply = totalSupply;
        tokenInfo.owner = ownerAddress;
        insertAccount(ownerAddress, creatorAccount);
        admins.push(ownerAddress);
        return ownerAddress;
    }),

    allState: query([], Vec(Account), () => {
        return state.values();
    }),

    whoami: query([], text, () => {
        return getCaller();
    }),

    totalSupply: query([], nat64, () => {
        return tokenInfo.totalSupply;
    }),

    owner: query([], text, () => {
        return tokenInfo.owner;
    }),

    balanceOf: query([text], nat64, (address) => {
        const accountOpt = getAccountByAddress(address);
        if ('None' in accountOpt) {
            return 0n;
        }
        return accountOpt.Some.balance;
    }),

    transferReward: update([text, nat64], bool, (to, amount) => {
        //from은 무조건 admin. admin이 reward를 줘야함.
        const caller = getCaller();
        if (!isAdmin(caller)) {
            throw new Error('Only admins can transfer reward');
        }
        const adminAccountOpt = getAccountByAddress(caller);
        if ('None' in adminAccountOpt) {
            throw new Error('adminAccount not found');
        }
        const adminAccount = adminAccountOpt.Some;
        const toAccountOpt = getAccountByAddress(to);
        if ('None' in toAccountOpt) {
            const newAccount: typeof Account = {
                address: to,
                balance: amount,
            };
            adminAccount.balance -= amount;
            insertAccount(to, newAccount);
            insertAccount(tokenInfo.owner, adminAccount);
            return true;
        } else {
            const toAccount = toAccountOpt.Some;
            toAccount.balance += amount;
            adminAccount.balance -= amount;
            insertAccount(to, toAccount);
            insertAccount(tokenInfo.owner, adminAccount);
            return true;
        }
    }),

    payToAdmin: update([nat64], bool, (amount) => {
        // 무조건 admin에게 보내야하기 때문에 from만 입력받음.
        const fromAddress = getCaller();
        const fromAccountOpt = getAccountByAddress(fromAddress);
        if ('None' in fromAccountOpt) {
            throw new Error('fromAccount not found');
        }
        const fromAccount = fromAccountOpt.Some;
        const bigIntAmount = BigInt(amount);
        if (!fromAccount || fromAccount.balance < bigIntAmount) {
            return false;
        }
        const adminAccountOpt = getAccountByAddress(tokenInfo.owner);
        if ('None' in adminAccountOpt) {
            throw new Error('Admin account not found');
        }
        const adminAccount = adminAccountOpt.Some;
        fromAccount.balance -= bigIntAmount;
        adminAccount.balance += bigIntAmount;
        insertAccount(fromAddress, fromAccount);
        insertAccount(tokenInfo.owner, adminAccount);
        return true;
    }),

    mint: update([text, nat64], bool, (to, amount) => {
        const caller = getCaller();
        // mint 함수는 admin인 계정만 호출할 수 있습니다.
        if (admins.indexOf(caller) == -1) {
            throw new Error('Only admins can mint new tokens');
        }
        const toAccountOpt = getAccountByAddress(to);
        if ('None' in toAccountOpt) {
            const newAccount: typeof Account = {
                address: to,
                balance: amount,
            };
            insertAccount(to, newAccount);
        } else {
            const toAccount = toAccountOpt.Some;
            toAccount.balance += amount;
            insertAccount(to, toAccount);
        }

        tokenInfo.totalSupply += amount; // 전체 발행된 토큰의 양 추가

        return true;
    }),

    burn: update([text, nat64], bool, (from, amount) => {
        const caller = getCaller();
        // burn 함수는 admin인 계정만 호출할 수 있습니다.
        if (admins.indexOf(caller) == -1) {
            throw new Error('Only admins can burn tokens');
        }

        const fromAccountOpt = getAccountByAddress(from);
        if ('None' in fromAccountOpt) {
            throw new Error('Recipient account not found');
        }
        const fromAccount = fromAccountOpt.Some;

        if (fromAccount.balance < amount) {
            throw new Error('insufficient balance to burn');
        }
        // from에서 0이라는 주소(없는 ㅈ소)로 amount 보내기
        let burningAccount;
        const burningAccountOpt = getAccountByAddress('0');
        if ('None' in burningAccountOpt) {
            const newBurningAccount: typeof Account = {
                address: '0',
                balance: 0n,
            };
            burningAccount = insertAccount('0', newBurningAccount);
        } else {
            burningAccount = burningAccountOpt.Some;
        }

        burningAccount.balance += amount;
        fromAccount.balance -= amount;
        tokenInfo.totalSupply -= amount; // 전체 토큰에서 양 빼기

        insertAccount(from, fromAccount);
        insertAccount('0', burningAccount);
        return true;
    }),
});
