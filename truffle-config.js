const HDWalletProvider = require("@truffle/hdwallet-provider")

const private_keys = [
  '4fb2521f250c663259b8cf4af0ed227ca946dcc1355a95968ff6713d945f33bb',
  '3d0ca13f9358d3ee4f5755d48f7b24b8da701184f9404c14889c1833a72b002d'
]

require('babel-register');
require('babel-polyfill');

module.exports = {
  networks: {

    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },

    rinkeby: {
      provider: () => new HDWalletProvider({
        privateKeys: private_keys,
        providerOrUrl: "https://rinkeby.infura.io/v3/e39ffda7e0e74f5abb078be42adef24d",
        numberOfAddresses: 2
      }),
      network_id: 4,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      saveDeployments: true
    }

  },


  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      },
      evmVersion: "petersburg"
    }
  }
}
