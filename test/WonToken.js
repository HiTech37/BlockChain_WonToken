// const _deploy_contracts = require("../migrations/2_deploy_contracts");

var WonToken = artifacts.require("./WonToken.sol");

contract('WonToken', function(accounts) {
    it('sets the total supply upon deployment', function() {
        return WonToken.deployed().then(function(instance) {
            tokenInstance = instance;
            return tokenInstance.totalSupply();
        }).then(function(totalSupply) {
            assert.equal(totalSupply.toNumber(), 1000000, "sets the total supply to 1,000,000");
        })
    })
})