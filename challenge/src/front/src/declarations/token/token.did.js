export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'addAdmins' : IDL.Func([IDL.Principal], [IDL.Bool], []),
    'allState' : IDL.Func(
        [],
        [
          IDL.Vec(
            IDL.Record({
              'balance' : IDL.Nat64,
              'address' : IDL.Principal,
              'allowances' : IDL.Vec(
                IDL.Record({ 'amount' : IDL.Nat64, 'spender' : IDL.Principal })
              ),
            })
          ),
        ],
        ['query'],
      ),
    'allowance' : IDL.Func(
        [IDL.Principal, IDL.Principal],
        [IDL.Nat64],
        ['query'],
      ),
    'allowanceFrom' : IDL.Func([IDL.Principal], [IDL.Nat64], ['query']),
    'balanceOf' : IDL.Func(
        [IDL.Principal],
        [
          IDL.Variant({
            'Ok' : IDL.Nat64,
            'Err' : IDL.Variant({
              'InsufficientToken' : IDL.Principal,
              'OnlyAdminAccess' : IDL.Principal,
              'AccountDoesNotExist' : IDL.Principal,
            }),
          }),
        ],
        ['query'],
      ),
    'connectAccount' : IDL.Func([], [IDL.Bool], []),
    'deleteAdmins' : IDL.Func([IDL.Principal], [IDL.Bool], []),
    'getAdmins' : IDL.Func([], [IDL.Vec(IDL.Principal)], ['query']),
    'initialize' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Nat64],
        [
          IDL.Variant({
            'Ok' : IDL.Principal,
            'Err' : IDL.Variant({
              'InsufficientToken' : IDL.Principal,
              'OnlyAdminAccess' : IDL.Principal,
              'AccountDoesNotExist' : IDL.Principal,
            }),
          }),
        ],
        [],
      ),
    'mint' : IDL.Func(
        [IDL.Principal, IDL.Nat64],
        [
          IDL.Variant({
            'Ok' : IDL.Bool,
            'Err' : IDL.Variant({
              'InsufficientToken' : IDL.Principal,
              'OnlyAdminAccess' : IDL.Principal,
              'AccountDoesNotExist' : IDL.Principal,
            }),
          }),
        ],
        [],
      ),
    'name' : IDL.Func([], [IDL.Text], ['query']),
    'owner' : IDL.Func([], [IDL.Principal], ['query']),
    'payToAdmin' : IDL.Func(
        [IDL.Nat64],
        [
          IDL.Variant({
            'Ok' : IDL.Bool,
            'Err' : IDL.Variant({
              'InsufficientToken' : IDL.Principal,
              'OnlyAdminAccess' : IDL.Principal,
              'AccountDoesNotExist' : IDL.Principal,
            }),
          }),
        ],
        [],
      ),
    'ticker' : IDL.Func([], [IDL.Text], ['query']),
    'totalSupply' : IDL.Func([], [IDL.Nat64], ['query']),
    'transferReward' : IDL.Func(
        [IDL.Principal, IDL.Nat64],
        [
          IDL.Variant({
            'Ok' : IDL.Bool,
            'Err' : IDL.Variant({
              'InsufficientToken' : IDL.Principal,
              'OnlyAdminAccess' : IDL.Principal,
              'AccountDoesNotExist' : IDL.Principal,
            }),
          }),
        ],
        [],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
