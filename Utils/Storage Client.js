/*jshint esversion: 6 */
const Web3 = require('web3');
const infuraUrl = "https://mainnet.infura.io/v3/53dbf207e63c42e99cacb63c2d41ec4f";
const ganacheUrl = "http://localhost:8545";

let web3Provider = new Web3.providers.HttpProvider(ganacheUrl);

web3 = new Web3(web3Provider);


// Get Current Gas Price
web3.eth.getGasPrice().then(function(gasPrice) {
  console.log(`Gas Price in Wei: ${gasPrice}`);
  console.log(`Gas Price in GWei: ${gasPrice / 1000000000}`);
});

// Convert ETH To USD
const axios = require('axios');
let ethPriceinUSD;
const address = '0x9b7421fC327E1B5123Ff9aDDD4B21d44557a3a13';  // account address
const vaddress = '0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B'; // Vitalik

axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd')
.then(response => {
  ethPriceinUSD = response.data.ethereum.usd;
    web3.eth.getBalance(address).then(result => {
      balanceinEther = web3.utils.fromWei(result, 'ether');
      console.log(` Balance in Ether: ${balanceinEther}`);
      console.log(` Balance in USD: ${balanceinEther * ethPriceinUSD}`);
  });
})
.catch(error => {
  console.log(error);
}
);

/* Get the contract ABI */
const fs = require('fs');
const contractJSON = JSON.parse(fs.readFileSync('../Wallet/build/contracts/Storage.json', 'utf8'));
const abi = JSON.stringify(contractJSON.abi);
//console.log(abi);


/*****  Storage Contract interactions *****/

// Set Account
web3.eth.defaultAccount = web3.eth.accounts[0];
// Set Contract Abi
var contractAbi = [ { "inputs": [], "name": "data", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [], "name": "getData", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [ { "internalType": "string", "name": "_data", "type": "string" } ], "name": "setData", "outputs": [], "stateMutability": "nonpayable", "type": "function" } ];
// Set Contract Address
var contractAddress = '0xd6533304C191965Eea88F9b7d1F7da81993fF780';
  // Set the Contract
var StorageContract = new web3.eth.Contract(contractAbi, contractAddress);

// Estimate gas using the callback
StorageContract.methods.setData('Yellow').estimateGas({gas: 3000000}, function(error, gasAmount){
  if(gasAmount == 3000000)
    console.log('Method ran out of gas');
  else{
    console.log('Gas Amount: ' + gasAmount + ' thats plenty gas Jim!' );
  }
});

// Estimate Gas - using the promise
StorageContract.methods.setData('Sky Blue').estimateGas({from: '0x9b7421fC327E1B5123Ff9aDDD4B21d44557a3a13'})
.then(function(gasAmount){
    console.log('should cost this much gas: ' + gasAmount);
})
.catch(function(error){
    console.log('Not enuff gas');
});

StorageContract.methods.getData().call((err, data) => {
  console.log(' STORAGE DATA BEFORE  = ' + data);
});

StorageContract.methods.setData('Blue Sky').send({from: '0x9b7421fC327E1B5123Ff9aDDD4B21d44557a3a13'})
.then(function(receipt){
  console.log(' SETTING STORAGE DATA: transaction Hash = ' + receipt.transactionHash + ', Gas used = ' + receipt.gasUsed);
    // Display The Data
  StorageContract.methods.getData().call((err, data) => {
    console.log(' STORAGE DATA NOW = ' + data);
  });
});
