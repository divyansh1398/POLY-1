# Polygon-1

This is the project where we deploy our nft contract to etherium testnet, and then we mint the nft's and then we map it and then we send it to mumbai network.

## Getting Started

### Executing the Program

To check the functionality of the contract, you can run the test file using the following command:

```shell
npx hardhat test
```

### Deploying the ERC721A Contract

1. Create a `.env` file and assign your private key to the `PRIVATE_KEY` variable.
2. Run the deployment script by executing the following command:

```shell
npx hardhat run scripts/deploy.js --network goerli 
```

The deployment script will output the contract address in the console and save it in the "contractAddress.js" file located in the metadata folder.

### Batch Minting NFTs

To mint NFTs in the contract, run the following command:

```shell
npx hardhat run scripts/batchMint.js --network goerli
```

### Approving and Depositing NFTs to Polygon Mumbai

To approve and deposit the minted NFTs from the Ethereum testnet to the Polygon Mumbai network using the FxPortal Bridge, execute the following command:

```shell
npx hardhat run scripts/approveDeposit.js --network goerli
```

### Viewing the Prompt

If you want to view the prompt, you can run by using the following command:

```shell
yarn hardhat run scripts/viewPrompt.js
```
