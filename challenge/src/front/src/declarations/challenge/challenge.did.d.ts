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
          { 'ChallengeDoesNotExist' : Principal } |
          { 'ConnectionError' : Principal }
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
          { 'ChallengeDoesNotExist' : Principal } |
          { 'ConnectionError' : Principal }
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
          { 'ChallengeDoesNotExist' : Principal } |
          { 'ConnectionError' : Principal }
      }
  >,
  'getChallengesByCreator' : ActorMethod<
    [],
    Array<
      {
        'id' : Principal,
        'reward' : bigint,
        'title' : string,
        'creator' : Principal,
        'responses' : Array<
          {
            'id' : number,
            'title' : string,
            'contents' : string,
            'chosen' : boolean,
            'responderId' : Principal,
          }
        >,
        'createdAt' : bigint,
        'completed' : Array<
          {
            'id' : Principal,
            'username' : string,
            'rewardedChallengeIds' : Array<Principal>,
            'createdAt' : bigint,
            'publishingChallengeIds' : Array<Principal>,
            'participatingChallengeIds' : Array<Principal>,
          }
        >,
        'description' : string,
        'deadline' : bigint,
        'ongoing' : boolean,
      }
    >
  >,
  'getChallengesByDate' : ActorMethod<
    [bigint, bigint],
    Array<
      {
        'id' : Principal,
        'reward' : bigint,
        'title' : string,
        'creator' : Principal,
        'responses' : Array<
          {
            'id' : number,
            'title' : string,
            'contents' : string,
            'chosen' : boolean,
            'responderId' : Principal,
          }
        >,
        'createdAt' : bigint,
        'completed' : Array<
          {
            'id' : Principal,
            'username' : string,
            'rewardedChallengeIds' : Array<Principal>,
            'createdAt' : bigint,
            'publishingChallengeIds' : Array<Principal>,
            'participatingChallengeIds' : Array<Principal>,
          }
        >,
        'description' : string,
        'deadline' : bigint,
        'ongoing' : boolean,
      }
    >
  >,
  'getChallengesByParticipant' : ActorMethod<
    [Principal],
    Array<
      {
        'id' : Principal,
        'reward' : bigint,
        'title' : string,
        'creator' : Principal,
        'responses' : Array<
          {
            'id' : number,
            'title' : string,
            'contents' : string,
            'chosen' : boolean,
            'responderId' : Principal,
          }
        >,
        'createdAt' : bigint,
        'completed' : Array<
          {
            'id' : Principal,
            'username' : string,
            'rewardedChallengeIds' : Array<Principal>,
            'createdAt' : bigint,
            'publishingChallengeIds' : Array<Principal>,
            'participatingChallengeIds' : Array<Principal>,
          }
        >,
        'description' : string,
        'deadline' : bigint,
        'ongoing' : boolean,
      }
    >
  >,
  'getChallengesByParticipants' : ActorMethod<
    [bigint, bigint],
    Array<
      {
        'id' : Principal,
        'reward' : bigint,
        'title' : string,
        'creator' : Principal,
        'responses' : Array<
          {
            'id' : number,
            'title' : string,
            'contents' : string,
            'chosen' : boolean,
            'responderId' : Principal,
          }
        >,
        'createdAt' : bigint,
        'completed' : Array<
          {
            'id' : Principal,
            'username' : string,
            'rewardedChallengeIds' : Array<Principal>,
            'createdAt' : bigint,
            'publishingChallengeIds' : Array<Principal>,
            'participatingChallengeIds' : Array<Principal>,
          }
        >,
        'description' : string,
        'deadline' : bigint,
        'ongoing' : boolean,
      }
    >
  >,
  'getChallengesByReward' : ActorMethod<
    [bigint, bigint],
    Array<
      {
        'id' : Principal,
        'reward' : bigint,
        'title' : string,
        'creator' : Principal,
        'responses' : Array<
          {
            'id' : number,
            'title' : string,
            'contents' : string,
            'chosen' : boolean,
            'responderId' : Principal,
          }
        >,
        'createdAt' : bigint,
        'completed' : Array<
          {
            'id' : Principal,
            'username' : string,
            'rewardedChallengeIds' : Array<Principal>,
            'createdAt' : bigint,
            'publishingChallengeIds' : Array<Principal>,
            'participatingChallengeIds' : Array<Principal>,
          }
        >,
        'description' : string,
        'deadline' : bigint,
        'ongoing' : boolean,
      }
    >
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
          { 'ChallengeDoesNotExist' : Principal } |
          { 'ConnectionError' : Principal }
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
          { 'ChallengeDoesNotExist' : Principal } |
          { 'ConnectionError' : Principal }
      }
  >,
}
