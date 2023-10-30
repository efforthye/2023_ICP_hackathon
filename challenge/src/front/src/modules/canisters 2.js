// 요기에 사용 가능한 함수들 모아놓기
// 캐니스터 토큰 있는 경로를 가져옴
import {
    canisterId as tokenCanisterId,
    challenge as tokenChallenge,
    createActor as createTokenActor,
    idlFactory as tokenIdlFactory,
} from '../declarations/token/index.js';
import {
    canisterId as challengeCanisterId,
    challenge as challengeChallenge,
    createActor as createChallengeActor,
    idlFactory as challengeIdlFactory,
} from '../declarations/challenge/index.js';

import { AuthClient } from '@dfinity/auth-client';

import { ActorSubclass, HttpAgentOptions, HttpAgent, Actor, ActorConfig, Agent } from '@dfinity/agent';

const host = 'http://localhost:4943';

const authClient = await AuthClient.create();
const principal = await authClient.getIdentity().getPrincipal();
const agent = new HttpAgent({ host, identity: principal });
