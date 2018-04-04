const BlueCrowdsale = artifacts.require('./BlueCrowdsale.sol');

module.exports = function (deployer, network, accounts) {
   // const rate = new web3.BigNumber(1000);

    return liveDeploy(deployer, accounts);
};

async function liveDeploy(deployer, accounts) {
    const Rate = 1;
    const Token = 10 * 10 * 18

    return deployer.deploy(BlueCrowdsale, Rate, accounts[0], Token)
        .then(async () => {
            const instance = await BlueCrowdsale.deployed();
            const token = await instance.token.call();
            console.log('Token Address -- ',token,Token);
        })
}