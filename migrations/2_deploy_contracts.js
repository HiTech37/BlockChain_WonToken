const WonToken = artifacts.require("WonToken");

module.exports = function(deployer) {
  deployer.deploy(WonToken, 1000000);
};
