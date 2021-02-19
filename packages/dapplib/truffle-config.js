require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture rebel frame security iron note script coconut include kitchen orange gasp'; 
let testAccounts = [
"0x3231d5e10051813792c10ee775c19788fdd9cd5b1307ee1b6c87aa2ea336ec73",
"0x459bd6e82ce70211bd4cf9959d100d68b9b4ee4798b955bab49e03f5c23ff8ec",
"0x0acbd7d850b2d8455950de95311f65aab63a6669e93bb9f1bf1d3ef43ca8f7d0",
"0x9fdb8cad32041c51ab958b6199cb3a617a88fcb8f62d8612ceacc00eb5da0145",
"0x2688de02b512685ad69ebbeb8d1c8a49dbbdad3f7dd3d75c7f52e42bfd3b2551",
"0xc8387fcac6961fd8321a9a4c0e39f4335b96ebb07a1c5dab336747c124801fa6",
"0x66a94a12edf192ea3b2d171367fc91d5454d92c7acddcdf826f157f38fd339ca",
"0x891117739c74f0600312d151b9609ca01d5c109c05053417f8d1f6fff055603c",
"0xb026cce8cd51c71a783cbd8972887fde4cad6429b3292c8cab4e5781737a39a9",
"0xd2b65a725bfe635b782e1c99152227d2f055299e3fddb5190a84add8192c90bb"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
