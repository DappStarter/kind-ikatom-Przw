require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'hidden enter october food note radar spider unit coral light army genuine'; 
let testAccounts = [
"0x885c604d3477ebfc3de43d110a5153eb95ce6fae40bf954b1793a6e3124edeea",
"0x8bc0ecb4ea0912dd70f2a32722e33ccf78611b912f8f10dae83a82e879fea64e",
"0xf243b7c923caa732df695a1106a7a518423611a4157dd9fa87b80d1213637705",
"0x84d46fd4b70c1412e8d08486511796a21db3de6b4851a965e3d5cde00a589f97",
"0x902f2a52e66a47f531359145139cba0d574d1ad190a0d0ba81fd91ee744b1e9c",
"0xcf4fd1efac9ff31a23b2cf6d9eebcc0b2e45dbcd53fe74baff5c8b64807aad63",
"0xd745bc23aaffdd508da4efc8230671ccbf9600ff9ef5c82be83534b1ca9b5e04",
"0x2fd1ccc9ea96998cef5d19de951b4aced89b68342c5852270d43bc18f9618c52",
"0x6c0826331a2650c86ba143379700a93295a80dd1d1e69c3db06a79b1866c3830",
"0xca280b062b0d9c0399825861e28c59e10f26407dbd3c9d3bd42576bf8b353ab1"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


