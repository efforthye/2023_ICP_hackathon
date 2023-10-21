import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface _SERVICE {
  'addAdmins' : ActorMethod<[Principal], boolean>,
  'allState' : ActorMethod<
    [],
    Array<
      {
        'balance' : bigint,
        'address' : Principal,
        'allowances' : Array<{ 'amount' : bigint, 'spender' : Principal }>,
      }
    >
  >,
  'allowance' : ActorMethod<[Principal, Principal], bigint>,
  'allowanceFrom' : ActorMethod<[Principal], bigint>,
  'balanceOf' : ActorMethod<
    [Principal],
    { 'Ok' : bigint } |
      {
        'Err' : { 'InsufficientToken' : Principal } |
          { 'OnlyAdminAccess' : Principal } |
          { 'AccountDoesNotExist' : Principal }
      }
  >,
  'connectAccount' : ActorMethod<[], boolean>,
  'deleteAdmins' : ActorMethod<[Principal], boolean>,
  'getAdmins' : ActorMethod<[], Array<Principal>>,
  'initialize' : ActorMethod<
    [string, string, bigint],
    { 'Ok' : Principal } |
      {
        'Err' : { 'InsufficientToken' : Principal } |
          { 'OnlyAdminAccess' : Principal } |
          { 'AccountDoesNotExist' : Principal }
      }
  >,
  'mint' : ActorMethod<
    [Principal, bigint],
    { 'Ok' : boolean } |
      {
        'Err' : { 'InsufficientToken' : Principal } |
          { 'OnlyAdminAccess' : Principal } |
          { 'AccountDoesNotExist' : Principal }
      }
  >,
  'name' : ActorMethod<[], string>,
  'owner' : ActorMethod<[], Principal>,
  'payToAdmin' : ActorMethod<
    [bigint],
    { 'Ok' : boolean } |
      {
        'Err' : { 'InsufficientToken' : Principal } |
          { 'OnlyAdminAccess' : Principal } |
          { 'AccountDoesNotExist' : Principal }
      }
  >,
  'ticker' : ActorMethod<[], string>,
  'totalSupply' : ActorMethod<[], bigint>,
  'transferReward' : ActorMethod<
    [Principal, bigint],
    { 'Ok' : boolean } |
      {
        'Err' : { 'InsufficientToken' : Principal } |
          { 'OnlyAdminAccess' : Principal } |
          { 'AccountDoesNotExist' : Principal }
      }
  >,
}
