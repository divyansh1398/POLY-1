# Polygon-1

This project involves deploying our NFT contract to the Ethereum testnet, followed by minting the NFTs, mapping them, and finally, sending them to the Mumbai network.

## Getting Started

### Executing the Program

To verify the contract's functionality, execute the test file with the provided command:

```shell
npx hardhat test
```

### Deploying the ERC721A Contract

1. Set up a `.env` file and allocate your private key to the `PRIVATE_KEY` variable.
2. Trigger the deployment script using the following command:

```shell
npx hardhat run scripts/deploy.js --network goerli 
```

Upon execution, the deployment script will display the contract address in the console and save it to the "contractAddress.js" file in the metadata folder.

### Batch Minting NFTs

To mint NFTs within the contract, use the following command:

```shell
npx hardhat run scripts/batchMint.js --network goerli
```

### Approving and Depositing NFTs to Polygon Mumbai

For approving and depositing the minted NFTs from the Ethereum testnet to the Polygon Mumbai network through the FxPortal Bridge, run the following command:

```shell
npx hardhat run scripts/approveDeposit.js --network goerli
```

### Checking the Prompt

To view the prompt, execute the command:

```shell
yarn hardhat run scripts/viewPrompt.js
```
