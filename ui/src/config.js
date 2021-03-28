export const contractAddress = '0x778f2614776fB677965d0E4eb1Ae9803C64bCd56';

export const contractAbi =  [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "

 Name": "_from", "type": "address" }, { "indexed": true, "internalType": "address", "

 Name": "_to", "type": "address" }, { "indexed": false, "internalType": "uint256", "

 Name": "_value", "type": "uint256" } ], "

 Name": "Transfer", "type": "event" }, { "inputs": [], "

 Name": "balance", "outputs": [ { "internalType": "uint256", "

 Name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [], "

 Name": "data", "outputs": [ { "internalType": "uint256", "

 Name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [ { "internalType": "uint256", "

 Name": "amount", "type": "uint256" } ], "

 Name": "save", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "

 Name": "amount", "type": "uint256" }, { "internalType": "address", "

 Name": "recipient", "type": "address" } ], "

 Name": "spend", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "

 Name": "balanceFunction", "outputs": [ { "internalType": "uint256", "

 Name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [ { "internalType": "address", "

 Name": "sender", "type": "address" }, { "internalType": "uint256", "

 Name": "amount", "type": "uint256" } ], "

 Name": "payMe", "outputs": [ { "internalType": "bool", "

 Name": "success", "type": "bool" } ], "stateMutability": "payable", "type": "function", "payable": true }, { "inputs": [ { "internalType": "address", "

 Name": "receiver", "type": "address" }, { "internalType": "uint256", "

 Name": "amount", "type": "uint256" } ], "

 Name": "sendCoin", "outputs": [ { "internalType": "bool", "

 Name": "sufficient", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "

 Name": "addr", "type": "address" } ], "

 Name": "getBalanceInEth", "outputs": [ { "internalType": "uint256", "

 Name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [ { "internalType": "address", "

 Name": "addr", "type": "address" } ], "

 Name": "getBalance", "outputs": [ { "internalType": "uint256", "

 Name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function", "constant": true } ];