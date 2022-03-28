// deploy/00_deploy_your_contract.js

const { ethers } = require("hardhat");

const localChainId = "31337";

// const sleep = (ms) =>
//   new Promise((r) =>
//     setTimeout(() => {
//       console.log(`waited for ${(ms / 1000).toFixed(3)} seconds`);
//       r();
//     }, ms)
//   );

module.exports = async ({ getNamedAccounts, deployments, getChainId }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = await getChainId();

  console.log("Deploying contracts with the account: ", deployer);

  await deploy("MyNFT", {
    // Learn more about args here: https://www.npmjs.com/package/hardhat-deploy#deploymentsdeploy
    from: deployer,
    // args: [ "Hello", ethers.utils.parseEther("1.5") ],
    log: true,
    waitConfirmations: 5,
  });

  // Getting a previously deployed contract
  const MyNFTContract = await ethers.getContract("MyNFT", deployer);
  console.log("Contract deployed to address:", MyNFTContract.address);
  // await YourContract.setPurpose("Hello");

  // To take ownership of yourContract using the ownable library uncomment next line and add the
  // address you want to be the owner.
  // await MyNFTContract.transferOwnership(
  //   "0x3a98558DB12296e4D48f5e26C8c3c09466216DE6"
  // );
};
module.exports.tags = ["MyNFT"];
