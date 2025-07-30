require("@nomicfoundation/hardhat-toolbox");

const config = {
  solidity: "0.8.17",
  networks: {
    monad: {
      url: "https://testnet-rpc.monad.xyz/",
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  etherscan: {
    enabled: false
  },
  sourcify: {
    enabled: true,
    apiUrl: "https://sourcify-api-monad.blockvision.org",
    browserUrl: "https://testnet.monadexplorer.com"
  }
};

module.exports = config;
