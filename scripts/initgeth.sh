#! /bin/sh

geth --identity "BabyIDBlock" --rpc --rpcport "8080" --rpccorsdomain "*" --datadir "./ether" --port "30303" --nodiscover --ipcapi "admin,db,eth,debug,miner,net,shh,txpool,personal,web3" --rpcapi "db,eth,net,web3" --autodag --networkid 1900 --nat "any" console init ./scripts/CustomGenesis.json
