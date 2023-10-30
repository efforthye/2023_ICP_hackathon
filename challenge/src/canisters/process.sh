touch result.txt
dfx canister call token initialize '("seoho", "seo", 10000000000000)' >> result.txt
dfx identity use user1 
dfx canister call challenge createUser '("user1")'

dfx canister call challenge createChallenge '("Title1-user6", "description1", 500, 60000)' >> result.txt 
dfx canister call challenge createChallenge '("Title2-user6", "description2", 100, 60000)' >> result.txt 
dfx canister call challenge createChallenge '("Title3-user6", "description3", 150, 100000)' >> result.txt 
dfx canister call challenge createChallenge '("Title3-user6", "description3", 150, 100000)' >> result.txt

dfx identity use user1 >> result.txt
dfx canister call challenge joinChallenge '("test1","test1",principal "u2sc4-7kqj6-mnxya-3lsme-qx3rg-2wxkc-3yawa-zn6nm-7nkid-bo75s-476")' >> result.txt
dfx identity use user2 >> result.txt
dfx canisiter call challenge joinChallenge '(P1)' >> result.txt
dfx identity use user3 >> result.txt
dfx canisiter call challenge joinChallenge '(P1)' >> result.txt

dfx canister call challenge rewardParticipant '(,1)'

dfx canister call challenge deleteUser '(principal "")'



dfx canister call token allState
dfx canister call token balanceOf
dfx canister call challenge getChallenges
dfx canister call challenge readUsers

principal "6qdup-6dp77-ulpze-n6rys-tgwxi-qrhsd-43ao4-q6xvh-wrvev-6nxoc-v5i"
dfx canister call challenge joinChallenge '("test","test",)'

dfx canister call challenge rewardParticipant '(,1)'

