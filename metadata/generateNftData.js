const fs = require('fs');
const path = require('path');
console.log(__dirname);

// Imports the nfts array from a separate file
const nfts = require('./nfts');

for (let i = 0; i < nfts.length; i++) {

  // Creates a JSON object for each NFT
  const json = {
    name: nfts[i].name,
    description: nfts[i].description,
    image: `https://gateway.pinata.cloud/ipfs/${nfts[i].image}`,
  };

  fs.writeFileSync(
		path.join(__dirname, 'nftcollection', String(i)),
		JSON.stringify(json)
	);
}