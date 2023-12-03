const { ethers } = require("hardhat");
const ABI = require("../artifacts/contracts/YogiImagine.sol/YogiImagine.json");

async function main() {
  const contractAddress = "0xF1E01E4a2452b9368af97F0Ff914f2A914e56992";
  const contractABI = ABI.abi;
  const networkName = "https://ethereum-goerli.publicnode.com";

  const provider = ethers.getDefaultProvider(networkName);

  // Get an instance of the contract using the contract address and ABI
  const contract = new ethers.Contract(contractAddress, contractABI, provider);

  // Get the prompt description from the contract
  const promptDescription = await contract.promptDescription();

  console.log(
    `Prompt for generating YogiImagine NFT images:\n${promptDescription}`
  );
}

// Call the main function and handle errors
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
