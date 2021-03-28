/*jshint esversion: 6 */
  const Web3 = require('web3');
  const web3utils = require('./Web3 Utils');

  const infuraUrl = "https://mainnet.infura.io/v3/53dbf207e63c42e99cacb63c2d41ec4f";
  const ganacheUrl = "http://localhost:8545";




 New Web3.providers.HttpProvider(ganacheUrl);




 New Web3(web3Provider);

  const iEarnContract = '0x9Dde7cdd09dbed542fC422d18d89A589fA9fD4C0';
  const erc20ABI = [{"constant":false,"inputs":[{"

 Name":"_spender","type":"address"},{"

 Name":"_value","type":"uint256"}],"

 Name":"approve","outputs":[{"

 Name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"

 Name":"_to","type":"address"},{"

 Name":"_value","type":"uint256"}],"

 Name":"showMeTheMoney","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"

 Name":"_to","type":"address"},{"

 Name":"_value","type":"uint256"}],"

 Name":"transfer","outputs":[{"

 Name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"

 Name":"_from","type":"address"},{"

 Name":"_to","type":"address"},{"

 Name":"_value","type":"uint256"}],"

 Name":"transferFrom","outputs":[{"

 Name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"

 Name":"_from","type":"address"},{"indexed":true,"

 Name":"_to","type":"address"},{"indexed":false,"

 Name":"_value","type":"uint256"}],"

 Name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"

 Name":"_owner","type":"address"},{"indexed":true,"

 Name":"_spender","type":"address"},{"indexed":false,"

 Name":"_value","type":"uint256"}],"

 Name":"Approval","type":"event"},{"constant":true,"inputs":[{"

 Name":"_owner","type":"address"},{"

 Name":"_spender","type":"address"}],"

 Name":"allowance","outputs":[{"

 Name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"

 Name":"_owner","type":"address"}],"

 Name":"balanceOf","outputs":[{"

 Name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"

 Name":"decimals","outputs":[{"

 Name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"

 Name":"

 Name","outputs":[{"

 Name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"

 Name":"symbol","outputs":[{"

 Name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"

 Name":"totalSupply","outputs":[{"

 Name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];
  const IEarnABI = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","

 Name":"owner","type":"address"},{"indexed":true,"internalType":"address","

 Name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","

 Name":"value","type":"uint256"}],"

 Name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","

 Name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","

 Name":"newOwner","type":"address"}],"

 Name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","

 Name":"from","type":"address"},{"indexed":true,"internalType":"address","

 Name":"to","type":"address"},{"indexed":false,"internalType":"uint256","

 Name":"value","type":"uint256"}],"

 Name":"Transfer","type":"event"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"constant":true,"inputs":[],"

 Name":"ETH_ADDRESS","outputs":[{"internalType":"address","

 Name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"

 Name":"ZAP_ADDRESS","outputs":[{"internalType":"address","

 Name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","

 Name":"owner","type":"address"},{"internalType":"address","

 Name":"spender","type":"address"}],"

 Name":"allowance","outputs":[{"internalType":"uint256","

 Name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","

 Name":"spender","type":"address"},{"internalType":"uint256","

 Name":"amount","type":"uint256"}],"

 Name":"approve","outputs":[{"internalType":"bool","

 Name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","

 Name":"account","type":"address"}],"

 Name":"balanceOf","outputs":[{"internalType":"uint256","

 Name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"

 Name":"calcPoolValueInETH","outputs":[{"internalType":"uint256","

 Name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"

 Name":"decimals","outputs":[{"internalType":"uint8","

 Name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","

 Name":"spender","type":"address"},{"internalType":"uint256","

 Name":"subtractedValue","type":"uint256"}],"

 Name":"decreaseAllowance","outputs":[{"internalType":"bool","

 Name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"

 Name":"getPricePerFullShare","outputs":[{"internalType":"uint256","

 Name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"

 Name":"inCaseETHGetsStuck","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"contract IERC20","

 Name":"_TokenAddress","type":"address"}],"

 Name":"inCaseTokenGetsStuck","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","

 Name":"spender","type":"address"},{"internalType":"uint256","

 Name":"addedValue","type":"uint256"}],"

 Name":"increaseAllowance","outputs":[{"internalType":"bool","

 Name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"

 Name":"invest","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"

 Name":"investSelf","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"

 Name":"isOwner","outputs":[{"internalType":"bool","

 Name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"

 Name":"

 Name","outputs":[{"internalType":"string","

 Name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"

 Name":"owner","outputs":[{"internalType":"address","

 Name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","

 Name":"_shares","type":"uint256"}],"

 Name":"redeem","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"

 Name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","

 Name":"_new_ETH_ADDRESS","type":"address"}],"

 Name":"set_new_ETH_ADDRESS","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","

 Name":"_new_ZAP_ADDRESS","type":"address"}],"

 Name":"set_new_ZAP_ADDRESS","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"

 Name":"symbol","outputs":[{"internalType":"string","

 Name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"

 Name":"totalSupply","outputs":[{"internalType":"uint256","

 Name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","

 Name":"recipient","type":"address"},{"internalType":"uint256","

 Name":"amount","type":"uint256"}],"

 Name":"transfer","outputs":[{"internalType":"bool","

 Name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","

 Name":"sender","type":"address"},{"internalType":"address","

 Name":"recipient","type":"address"},{"internalType":"uint256","

 Name":"amount","type":"uint256"}],"

 Name":"transferFrom","outputs":[{"internalType":"bool","

 Name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","

 Name":"newOwner","type":"address"}],"

 Name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];

  const address = '0x9b7421fC327E1B5123Ff9aDDD4B21d44557a3a13';  // account address
  const vaddress = '0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B'; // Vitalik


  web3utils.getCurrentGasPrice();
  web3utils.getAddressBalance('0xde0E025cf7C4AF2AAb3B0a896803ECC8253e18dF');


  /*****  Wallet Contract interactions *****/

  // Set Default Account
  web3.eth.defaultAccount = web3.eth.accounts[0];
  // Set Contract Abi
   var contractAbi = web3utils.getContractABI('../Wallet/build/contracts/Wallet.json');
  // Set Contract Address (retrieve from truffle console > let instance = await Wallet.deployed(), instance.address)
  var contractAddress = '0xbeC2d16EAA379617d3087492bd274Dbc92F87141';

  // Create Wallet Contract



 New web3.eth.Contract(contractAbi, contractAddress);

  console.log(WalletContract.methods)

  // Get balance in Wallet
  WalletContract.methods.balance().call((err, data) => {
    console.log(' Wallet balance  = ' + data);
  });

  // Estimate Gas using the promise
  WalletContract.methods.balance().estimateGas({from: '0x9b7421fC327E1B5123Ff9aDDD4B21d44557a3a13'})
  .then(function(gasAmount){
      console.log('This call should cost this much gas: ' + gasAmount);
  })
  .catch(function(error){
      console.log('Not enuff gas, error = ' + error);
  });


  /*WalletContract.methods.save(1010).send({from: '0x9b7421fC327E1B5123Ff9aDDD4B21d44557a3a13'})
  .then(function(receipt){
    console.log(' SETTING STORAGE DATA: transaction Hash = ' + receipt.transactionHash + ', Gas used = ' + receipt.gasUsed);
      // Display The Data
    StorageContract.methods.getData().call((err, data) => {
      console.log(' STORAGE DATA NOW = ' + data);
    });
  });*/
