import { createClient } from '@connect2ic/core';
import { defaultProviders } from '@connect2ic/core/providers';
import { IDL } from '@dfinity/candid';

const client = createClient({
    canisters: {
        challenge: {
            canisterId: 'b77ix-eeaaa-aaaaa-qaada-cai',
            idlFactory: () => {
                return IDL.Service({});
            },
        },
    },
    providers: defaultProviders,
    globalProviderConfig: {
        autoConnect: true,
    },
});

export default client;
