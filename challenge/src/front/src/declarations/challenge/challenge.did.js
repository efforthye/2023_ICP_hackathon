export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'createChallenge' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Nat64, IDL.Int],
        [
          IDL.Variant({
            'Ok' : IDL.Principal,
            'Err' : IDL.Variant({
              'InsufficientToken' : IDL.Principal,
              'UserNotCreator' : IDL.Principal,
              'UserAlreadyExist' : IDL.Principal,
              'ChallengeNotFinished' : IDL.Principal,
              'AlreadyParticipated' : IDL.Principal,
              'CreatorNotEnoughBalance' : IDL.Principal,
              'ChallengeFinished' : IDL.Principal,
              'ResponseDoesNotExist' : IDL.Int8,
              'UserNotParticipant' : IDL.Principal,
              'InvalidUser' : IDL.Principal,
              'UserDoesNotExist' : IDL.Principal,
              'ChallengeDoesNotExist' : IDL.Principal,
              'ConnectionError' : IDL.Principal,
            }),
          }),
        ],
        [],
      ),
    'createUser' : IDL.Func(
        [IDL.Text],
        [
          IDL.Variant({
            'Ok' : IDL.Principal,
            'Err' : IDL.Variant({
              'InsufficientToken' : IDL.Principal,
              'UserNotCreator' : IDL.Principal,
              'UserAlreadyExist' : IDL.Principal,
              'ChallengeNotFinished' : IDL.Principal,
              'AlreadyParticipated' : IDL.Principal,
              'CreatorNotEnoughBalance' : IDL.Principal,
              'ChallengeFinished' : IDL.Principal,
              'ResponseDoesNotExist' : IDL.Int8,
              'UserNotParticipant' : IDL.Principal,
              'InvalidUser' : IDL.Principal,
              'UserDoesNotExist' : IDL.Principal,
              'ChallengeDoesNotExist' : IDL.Principal,
              'ConnectionError' : IDL.Principal,
            }),
          }),
        ],
        [],
      ),
    'deleteUser' : IDL.Func(
        [IDL.Principal],
        [
          IDL.Variant({
            'Ok' : IDL.Record({
              'id' : IDL.Principal,
              'username' : IDL.Text,
              'rewardedChallengeIds' : IDL.Vec(IDL.Principal),
              'createdAt' : IDL.Nat64,
              'publishingChallengeIds' : IDL.Vec(IDL.Principal),
              'participatingChallengeIds' : IDL.Vec(IDL.Principal),
            }),
            'Err' : IDL.Variant({
              'InsufficientToken' : IDL.Principal,
              'UserNotCreator' : IDL.Principal,
              'UserAlreadyExist' : IDL.Principal,
              'ChallengeNotFinished' : IDL.Principal,
              'AlreadyParticipated' : IDL.Principal,
              'CreatorNotEnoughBalance' : IDL.Principal,
              'ChallengeFinished' : IDL.Principal,
              'ResponseDoesNotExist' : IDL.Int8,
              'UserNotParticipant' : IDL.Principal,
              'InvalidUser' : IDL.Principal,
              'UserDoesNotExist' : IDL.Principal,
              'ChallengeDoesNotExist' : IDL.Principal,
              'ConnectionError' : IDL.Principal,
            }),
          }),
        ],
        [],
      ),
    'getChallengesByCreator' : IDL.Func(
        [],
        [
          IDL.Vec(
            IDL.Record({
              'id' : IDL.Principal,
              'reward' : IDL.Nat64,
              'title' : IDL.Text,
              'creator' : IDL.Principal,
              'responses' : IDL.Vec(
                IDL.Record({
                  'id' : IDL.Int8,
                  'title' : IDL.Text,
                  'contents' : IDL.Text,
                  'chosen' : IDL.Bool,
                  'responderId' : IDL.Principal,
                })
              ),
              'createdAt' : IDL.Nat64,
              'completed' : IDL.Vec(
                IDL.Record({
                  'id' : IDL.Principal,
                  'username' : IDL.Text,
                  'rewardedChallengeIds' : IDL.Vec(IDL.Principal),
                  'createdAt' : IDL.Nat64,
                  'publishingChallengeIds' : IDL.Vec(IDL.Principal),
                  'participatingChallengeIds' : IDL.Vec(IDL.Principal),
                })
              ),
              'description' : IDL.Text,
              'deadline' : IDL.Nat64,
              'ongoing' : IDL.Bool,
            })
          ),
        ],
        ['query'],
      ),
    'getChallengesByDate' : IDL.Func(
        [IDL.Nat64, IDL.Nat64],
        [
          IDL.Vec(
            IDL.Record({
              'id' : IDL.Principal,
              'reward' : IDL.Nat64,
              'title' : IDL.Text,
              'creator' : IDL.Principal,
              'responses' : IDL.Vec(
                IDL.Record({
                  'id' : IDL.Int8,
                  'title' : IDL.Text,
                  'contents' : IDL.Text,
                  'chosen' : IDL.Bool,
                  'responderId' : IDL.Principal,
                })
              ),
              'createdAt' : IDL.Nat64,
              'completed' : IDL.Vec(
                IDL.Record({
                  'id' : IDL.Principal,
                  'username' : IDL.Text,
                  'rewardedChallengeIds' : IDL.Vec(IDL.Principal),
                  'createdAt' : IDL.Nat64,
                  'publishingChallengeIds' : IDL.Vec(IDL.Principal),
                  'participatingChallengeIds' : IDL.Vec(IDL.Principal),
                })
              ),
              'description' : IDL.Text,
              'deadline' : IDL.Nat64,
              'ongoing' : IDL.Bool,
            })
          ),
        ],
        ['query'],
      ),
    'getChallengesByParticipant' : IDL.Func(
        [IDL.Principal],
        [
          IDL.Vec(
            IDL.Record({
              'id' : IDL.Principal,
              'reward' : IDL.Nat64,
              'title' : IDL.Text,
              'creator' : IDL.Principal,
              'responses' : IDL.Vec(
                IDL.Record({
                  'id' : IDL.Int8,
                  'title' : IDL.Text,
                  'contents' : IDL.Text,
                  'chosen' : IDL.Bool,
                  'responderId' : IDL.Principal,
                })
              ),
              'createdAt' : IDL.Nat64,
              'completed' : IDL.Vec(
                IDL.Record({
                  'id' : IDL.Principal,
                  'username' : IDL.Text,
                  'rewardedChallengeIds' : IDL.Vec(IDL.Principal),
                  'createdAt' : IDL.Nat64,
                  'publishingChallengeIds' : IDL.Vec(IDL.Principal),
                  'participatingChallengeIds' : IDL.Vec(IDL.Principal),
                })
              ),
              'description' : IDL.Text,
              'deadline' : IDL.Nat64,
              'ongoing' : IDL.Bool,
            })
          ),
        ],
        ['query'],
      ),
    'getChallengesByParticipants' : IDL.Func(
        [IDL.Nat64, IDL.Nat64],
        [
          IDL.Vec(
            IDL.Record({
              'id' : IDL.Principal,
              'reward' : IDL.Nat64,
              'title' : IDL.Text,
              'creator' : IDL.Principal,
              'responses' : IDL.Vec(
                IDL.Record({
                  'id' : IDL.Int8,
                  'title' : IDL.Text,
                  'contents' : IDL.Text,
                  'chosen' : IDL.Bool,
                  'responderId' : IDL.Principal,
                })
              ),
              'createdAt' : IDL.Nat64,
              'completed' : IDL.Vec(
                IDL.Record({
                  'id' : IDL.Principal,
                  'username' : IDL.Text,
                  'rewardedChallengeIds' : IDL.Vec(IDL.Principal),
                  'createdAt' : IDL.Nat64,
                  'publishingChallengeIds' : IDL.Vec(IDL.Principal),
                  'participatingChallengeIds' : IDL.Vec(IDL.Principal),
                })
              ),
              'description' : IDL.Text,
              'deadline' : IDL.Nat64,
              'ongoing' : IDL.Bool,
            })
          ),
        ],
        ['query'],
      ),
    'getChallengesByReward' : IDL.Func(
        [IDL.Nat64, IDL.Nat64],
        [
          IDL.Vec(
            IDL.Record({
              'id' : IDL.Principal,
              'reward' : IDL.Nat64,
              'title' : IDL.Text,
              'creator' : IDL.Principal,
              'responses' : IDL.Vec(
                IDL.Record({
                  'id' : IDL.Int8,
                  'title' : IDL.Text,
                  'contents' : IDL.Text,
                  'chosen' : IDL.Bool,
                  'responderId' : IDL.Principal,
                })
              ),
              'createdAt' : IDL.Nat64,
              'completed' : IDL.Vec(
                IDL.Record({
                  'id' : IDL.Principal,
                  'username' : IDL.Text,
                  'rewardedChallengeIds' : IDL.Vec(IDL.Principal),
                  'createdAt' : IDL.Nat64,
                  'publishingChallengeIds' : IDL.Vec(IDL.Principal),
                  'participatingChallengeIds' : IDL.Vec(IDL.Principal),
                })
              ),
              'description' : IDL.Text,
              'deadline' : IDL.Nat64,
              'ongoing' : IDL.Bool,
            })
          ),
        ],
        ['query'],
      ),
    'joinChallenge' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Principal],
        [
          IDL.Variant({
            'Ok' : IDL.Bool,
            'Err' : IDL.Variant({
              'InsufficientToken' : IDL.Principal,
              'UserNotCreator' : IDL.Principal,
              'UserAlreadyExist' : IDL.Principal,
              'ChallengeNotFinished' : IDL.Principal,
              'AlreadyParticipated' : IDL.Principal,
              'CreatorNotEnoughBalance' : IDL.Principal,
              'ChallengeFinished' : IDL.Principal,
              'ResponseDoesNotExist' : IDL.Int8,
              'UserNotParticipant' : IDL.Principal,
              'InvalidUser' : IDL.Principal,
              'UserDoesNotExist' : IDL.Principal,
              'ChallengeDoesNotExist' : IDL.Principal,
              'ConnectionError' : IDL.Principal,
            }),
          }),
        ],
        [],
      ),
    'readUserById' : IDL.Func(
        [IDL.Principal],
        [
          IDL.Opt(
            IDL.Record({
              'id' : IDL.Principal,
              'username' : IDL.Text,
              'rewardedChallengeIds' : IDL.Vec(IDL.Principal),
              'createdAt' : IDL.Nat64,
              'publishingChallengeIds' : IDL.Vec(IDL.Principal),
              'participatingChallengeIds' : IDL.Vec(IDL.Principal),
            })
          ),
        ],
        ['query'],
      ),
    'readUsers' : IDL.Func(
        [],
        [
          IDL.Vec(
            IDL.Record({
              'id' : IDL.Principal,
              'username' : IDL.Text,
              'rewardedChallengeIds' : IDL.Vec(IDL.Principal),
              'createdAt' : IDL.Nat64,
              'publishingChallengeIds' : IDL.Vec(IDL.Principal),
              'participatingChallengeIds' : IDL.Vec(IDL.Principal),
            })
          ),
        ],
        ['query'],
      ),
    'rewardParticipant' : IDL.Func(
        [IDL.Principal, IDL.Int8],
        [
          IDL.Variant({
            'Ok' : IDL.Bool,
            'Err' : IDL.Variant({
              'InsufficientToken' : IDL.Principal,
              'UserNotCreator' : IDL.Principal,
              'UserAlreadyExist' : IDL.Principal,
              'ChallengeNotFinished' : IDL.Principal,
              'AlreadyParticipated' : IDL.Principal,
              'CreatorNotEnoughBalance' : IDL.Principal,
              'ChallengeFinished' : IDL.Principal,
              'ResponseDoesNotExist' : IDL.Int8,
              'UserNotParticipant' : IDL.Principal,
              'InvalidUser' : IDL.Principal,
              'UserDoesNotExist' : IDL.Principal,
              'ChallengeDoesNotExist' : IDL.Principal,
              'ConnectionError' : IDL.Principal,
            }),
          }),
        ],
        [],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
