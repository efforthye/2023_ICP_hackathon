import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface _SERVICE {
  'createChallenge' : ActorMethod<
    [string, string, bigint, bigint],
    { 'Ok' : Principal } |
      {
        'Err' : { 'InsufficientToken' : Principal } |
          { 'UserNotCreator' : Principal } |
          { 'UserAlreadyExist' : Principal } |
          { 'ChallengeNotFinished' : Principal } |
          { 'AlreadyParticipated' : Principal } |
          { 'CreatorNotEnoughBalance' : Principal } |
          { 'ChallengeFinished' : Principal } |
          { 'ResponseDoesNotExist' : number } |
          { 'UserNotParticipant' : Principal } |
          { 'InvalidUser' : Principal } |
          { 'UserDoesNotExist' : Principal } |
          { 'ChallengeDoesNotExist' : Principal }
      }
  >,
  'createUser' : ActorMethod<
    [string],
    { 'Ok' : Principal } |
      {
        'Err' : { 'InsufficientToken' : Principal } |
          { 'UserNotCreator' : Principal } |
          { 'UserAlreadyExist' : Principal } |
          { 'ChallengeNotFinished' : Principal } |
          { 'AlreadyParticipated' : Principal } |
          { 'CreatorNotEnoughBalance' : Principal } |
          { 'ChallengeFinished' : Principal } |
          { 'ResponseDoesNotExist' : number } |
          { 'UserNotParticipant' : Principal } |
          { 'InvalidUser' : Principal } |
          { 'UserDoesNotExist' : Principal } |
          { 'ChallengeDoesNotExist' : Principal }
      }
  >,
  'deleteUser' : ActorMethod<
    [Principal],
    {
        'Ok' : {
          'id' : Principal,
          'username' : string,
          'rewardedChallengeIds' : Array<Principal>,
          'createdAt' : bigint,
          'publishingChallengeIds' : Array<Principal>,
          'participatingChallengeIds' : Array<Principal>,
        }
      } |
      {
        'Err' : { 'InsufficientToken' : Principal } |
          { 'UserNotCreator' : Principal } |
          { 'UserAlreadyExist' : Principal } |
          { 'ChallengeNotFinished' : Principal } |
          { 'AlreadyParticipated' : Principal } |
          { 'CreatorNotEnoughBalance' : Principal } |
          { 'ChallengeFinished' : Principal } |
          { 'ResponseDoesNotExist' : number } |
          { 'UserNotParticipant' : Principal } |
          { 'InvalidUser' : Principal } |
          { 'UserDoesNotExist' : Principal } |
          { 'ChallengeDoesNotExist' : Principal }
      }
  >,
  'expireChallenge' : ActorMethod<
    [Principal],
    { 'Ok' : boolean } |
      {
        'Err' : { 'InsufficientToken' : Principal } |
          { 'UserNotCreator' : Principal } |
          { 'UserAlreadyExist' : Principal } |
          { 'ChallengeNotFinished' : Principal } |
          { 'AlreadyParticipated' : Principal } |
          { 'CreatorNotEnoughBalance' : Principal } |
          { 'ChallengeFinished' : Principal } |
          { 'ResponseDoesNotExist' : number } |
          { 'UserNotParticipant' : Principal } |
          { 'InvalidUser' : Principal } |
          { 'UserDoesNotExist' : Principal } |
          { 'ChallengeDoesNotExist' : Principal }
      }
  >,
  'joinChallenge' : ActorMethod<
    [string, string, Principal],
    { 'Ok' : boolean } |
      {
        'Err' : { 'InsufficientToken' : Principal } |
          { 'UserNotCreator' : Principal } |
          { 'UserAlreadyExist' : Principal } |
          { 'ChallengeNotFinished' : Principal } |
          { 'AlreadyParticipated' : Principal } |
          { 'CreatorNotEnoughBalance' : Principal } |
          { 'ChallengeFinished' : Principal } |
          { 'ResponseDoesNotExist' : number } |
          { 'UserNotParticipant' : Principal } |
          { 'InvalidUser' : Principal } |
          { 'UserDoesNotExist' : Principal } |
          { 'ChallengeDoesNotExist' : Principal }
      }
  >,
  'readUserById' : ActorMethod<
    [Principal],
    [] | [
      {
        'id' : Principal,
        'username' : string,
        'rewardedChallengeIds' : Array<Principal>,
        'createdAt' : bigint,
        'publishingChallengeIds' : Array<Principal>,
        'participatingChallengeIds' : Array<Principal>,
      }
    ]
  >,
  'readUsers' : ActorMethod<
    [],
    Array<
      {
        'id' : Principal,
        'username' : string,
        'rewardedChallengeIds' : Array<Principal>,
        'createdAt' : bigint,
        'publishingChallengeIds' : Array<Principal>,
        'participatingChallengeIds' : Array<Principal>,
      }
    >
  >,
  'rewardParticipant' : ActorMethod<
    [Principal, number],
    { 'Ok' : boolean } |
      {
        'Err' : { 'InsufficientToken' : Principal } |
          { 'UserNotCreator' : Principal } |
          { 'UserAlreadyExist' : Principal } |
          { 'ChallengeNotFinished' : Principal } |
          { 'AlreadyParticipated' : Principal } |
          { 'CreatorNotEnoughBalance' : Principal } |
          { 'ChallengeFinished' : Principal } |
          { 'ResponseDoesNotExist' : number } |
          { 'UserNotParticipant' : Principal } |
          { 'InvalidUser' : Principal } |
          { 'UserDoesNotExist' : Principal } |
          { 'ChallengeDoesNotExist' : Principal }
      }
  >,
}
