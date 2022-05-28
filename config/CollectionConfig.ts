import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import { ethereumTestnet, ethereumMainnet } from '../lib/Networks';
import { openSea } from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';
import freelistAddresses from './freelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: ethereumTestnet,
  mainnet: ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'CoolBeezTest',
  tokenName: 'CoolBeez',
  tokenSymbol: 'CB',
  hiddenMetadataUri: 'ipfs://QmRGbNUTgQDJxSr7N5eY73T9WcwdBAMUNAe5bUt6xGo1qn/hidden.json',
  maxSupply: 6000,
  whitelistSale: {
    price: 0.069,
    maxMintAmountPerTx: 2,
  },
  preSale: {
    price: 0.07,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.075,
    maxMintAmountPerTx: 20,
  },
  contractAddress: "0x914D867c4F2e53BD251969Afe1B29ed4703F0F15",
  marketplaceIdentifier: 'CoolBeez',
  marketplaceConfig: openSea,
  whitelistAddresses: whitelistAddresses,
  freelistAddresses: freelistAddresses
};

export default CollectionConfig;
