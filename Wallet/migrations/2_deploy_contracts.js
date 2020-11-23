var Wallet  = artifacts.require("./Wallet.sol");
var Storage  = artifacts.require("./Storage.sol");
var MetaCoin  = artifacts.require("./MetaCoin.sol");

module.exports = function (deployer) {
  deployer.deploy(Wallet);
  deployer.deploy(Storage);
  deployer.deploy(MetaCoin);
};
