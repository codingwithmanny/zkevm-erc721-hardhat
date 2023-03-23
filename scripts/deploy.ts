// Imports
// ========================================================
import { ethers } from "hardhat";
import dotenv from "dotenv";

// Config
// ========================================================
dotenv.config();

// Main Deployment Script
// ========================================================
async function main() {
  // Make sure in the contract factory that it mateches the contract name in the solidity file
  // Ex: contract zkEVMNFT
  const zkERC721Contract = await ethers.getContractFactory("ZkEVMNFT");
  const contract = await zkERC721Contract.deploy();

  await contract.deployed();

  console.log(`zkEVMNFT deployed to ${contract.address}`);
};

// Init
// ========================================================
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});