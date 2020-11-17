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
const address = '0xde0E025cf7C4AF2AAb3B0a896803ECC8253e18dF';  // account address
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
const contractJSON = JSON.parse(fs.readFileSync('../Wallet/build/contracts/Wallet.json', 'utf8'));
const abi = JSON.stringify(contractJSON.abi);
console.log(abi);

