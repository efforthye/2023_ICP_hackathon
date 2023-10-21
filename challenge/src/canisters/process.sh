touch result.txt
dfx canister call token initiate '("seoho", "seo", 10000000000000)' >> result.txt
dfx identity use user1 >> result.txt
dfx canister call challenge createUser '("user1")' >> result.txt
dfx identity use user2 >> result.txt
dfx canister call challenge createUser '("user2")' >> result.txt
dfx identity use user3 >> result.txt
dfx canister call challenge createUser '("user3")' >> result.txt
dfx identity use user4 >> result.txt
dfx canister call challenge createUser '("user4")' >> result.txt
dfx identity use user5 >> result.txt
dfx canister call challenge createUser '("user5")' >> result.txt
dfx identity use user6 >> result.txt
dfx canister call challenge createUser '("user6")' >> result.txt

dfx canister call challenge createChallenge '("Title1-user6", "description1", 500, 60000000000)' >> result.txt #60초 - 얘하고 (답변을 단 expired)
dfx canister call challenge createChallenge '("Title2-user6", "description2", 100, 60000000000)' >> result.txt #60초 -얘하고 (답변 없는 expired) 비교
dfx canister call challenge createChallenge '("Title3-user6", "description3", 150, 100000000000)' >> result.txt #1000초
dfx canister call challenge createChallenge '("Title3-user6", "description3", 150, 1000000000000)' >> result.txt #1000초

dfx identity use user1 >> result.txt
dfx canisiter call challenge joinChallenge '(P1)' >> result.txt
dfx identity use user2 >> result.txt
dfx canisiter call challenge joinChallenge '(P1)' >> result.txt
dfx identity use user3 >> result.txt
dfx canisiter call challenge joinChallenge '(P1)' >> result.txt
