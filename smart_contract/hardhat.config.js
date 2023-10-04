require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/aBHcdG1HY1gvMUKerCVCP2MDwpbUvuYX',
      accounts: ['4985b74fa85a6ecdfcb25034b55102bbf5338068683c1740e4b9f72554ebb13a'],
    },
  },
};