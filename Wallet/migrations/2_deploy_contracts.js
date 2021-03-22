var Wallet  = artifacts.require("../contracts/Wallet.sol");
var Storage  = artifacts.require("./contracts/Storage.sol");
var MetaCoin  = artifacts.require("./contracts/MetaCoin.sol");

module.exports = function (deployer) {
  deployer.deploy(Wallet);
  deployer.deploy(Storage);
  deployer.deploy(MetaCoin);
};
