var Wallet  = artifacts.require("./Wallet.sol");
var Storage  = artifacts.require("./Storage.sol");
 
module.exports = function (deployer) {
  deployer.deploy(Wallet);
  deployer.deploy(Storage);
};
