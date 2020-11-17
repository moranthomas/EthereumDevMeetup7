/*jshint esversion: 6 */
const Web3 = require('web3');
const infuraUrl = "https://mainnet.infura.io/v3/53dbf207e63c42e99cacb63c2d41ec4f";
const ganacheUrl = "http://localhost:8545";

let web3Provider = new Web3.providers.HttpProvider(ganacheUrl);

web3 = new Web3(web3Provider);

const iEarnContract = '0x9Dde7cdd09dbed542fC422d18d89A589fA9fD4C0';
const erc20ABI = [{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"showMeTheMoney","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];
const IEarnABI = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"constant":true,"inputs":[],"name":"ETH_ADDRESS","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ZAP_ADDRESS","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"calcPoolValueInETH","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getPricePerFullShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"inCaseETHGetsStuck","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"contract IERC20","name":"_TokenAddress","type":"address"}],"name":"inCaseTokenGetsStuck","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"invest","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"investSelf","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_shares","type":"uint256"}],"name":"redeem","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_new_ETH_ADDRESS","type":"address"}],"name":"set_new_ETH_ADDRESS","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_new_ZAP_ADDRESS","type":"address"}],"name":"set_new_ZAP_ADDRESS","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];



web3.eth.getGasPrice().then(function(gasPrice) {
    console.log(`Gas Price in Wei: ${gasPrice}`);
    console.log(`Gas Price in GWei: ${gasPrice / 1000000000}`);
});


//ETH To USD
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

  const real_abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"save","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"recipient","type":"address"}],"name":"spend","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"balance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true}];


  const wallet_contract_address = '0x3B3C404823AB4da690b51a87A0d22cd527DC7c90';
  const WalletContract = new web3.eth.Contract(real_abi, wallet_contract_address);

  var actualBalanceInContract = web3.eth.getBalance(wallet_contract_address,
    (err, result) => {
      console.log('Actual Balance in Contract  = ' + result);
  });


  //var walletContractInstance = WalletContract.at(wallet_contract_address);
  WalletContract.methods.balance().call((err, result) => {
    console.log('Balance in smart contract is: '  + result);
  });



  // Set Account
  web3.eth.defaultAccount = web3.eth.accounts[0];
  // Set Contract Abi
  var contractAbi = [ { "inputs": [], "name": "data", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [], "name": "getData", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function", "constant": true }, { "inputs": [ { "internalType": "string", "name": "_data", "type": "string" } ], "name": "setData", "outputs": [], "stateMutability": "nonpayable", "type": "function" } ];
  // Set Contract Address
  var contractAddress = '0xd6533304C191965Eea88F9b7d1F7da81993fF780';
    // Set the Contract
  var StorageContract = new web3.eth.Contract(contractAbi, contractAddress);

  // Estimate gas using the callback
  StorageContract.methods.setData('Black').estimateGas({gas: 3000000}, function(error, gasAmount){
    if(gasAmount == 3000000)
      console.log('Method ran out of gas');
    else{
      console.log('Gas Amount: ' + gasAmount + ' thats plenty gas Jim!' );
    }
  });

  // Estimate Gas - using the promise
  StorageContract.methods.setData('Black').estimateGas({from: '0x9b7421fC327E1B5123Ff9aDDD4B21d44557a3a13'})
  .then(function(gasAmount){
      console.log('should cost this much gas: ' + gasAmount);
  })
  .catch(function(error){
      console.log('Not enuff gas');
  });


  // Set the Data
  StorageContract.methods.setData('BLACK').send((err, data) => {
    console.log('SETTING STORAGE DATA = ' + data);
  });

  // Display The Data
  StorageContract.methods.getData().call((err, data) => {
    console.log('STORAGE DATA = ' + data);
  });




  const account1 = 0x9b7421fC327E1B5123Ff9aDDD4B21d44557a3a13;
  const account2 = 0xbe3B42D5963b72Ef8324670FB950E6E71a686648;

  // Build the transaction
  const txObject = {
    nonce:    web3.utils.toHex(130),
    to:       account2,
    value:    web3.utils.toHex(web3.utils.toWei('0.1', 'ether')),
    gasLimit: web3.utils.toHex(21000),
    gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
  };


  /*web3.eth.call({
    to: wallet_contract_address,
    data: contract.methods.balanceOf(wallet_contract_address).encodeABI()
  }).then(balance => {console.log(data)})*/

  /*

  web3.eth.getTransactionCount(account1, (err, txCount) => {
    // Build the transaction
    const txObject = {
      nonce:    web3.utils.toHex(txCount),
      to:       account2,
      value:    web3.utils.toHex(web3.utils.toWei('0.1', 'ether')),
      gasLimit: web3.utils.toHex(21000),
      gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
    }

    // Sign the transaction
    const tx = new Tx(txObject)
    tx.sign(privateKey1)

    const serializedTx = tx.serialize()
    const raw = '0x' + serializedTx.toString('hex')

    // Broadcast the transaction
    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
      console.log('txHash:', txHash)
      // Now go check etherscan to see the transaction!
    });
  });

*/
