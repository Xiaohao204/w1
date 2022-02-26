// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
// const hre = require("hardhat");
const { ethers, artifacts, network } = require('hardhat');
const { writeAbiAddr } = require('./artifact_saver.js')

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Counter = await ethers.getContractFactory("Counter");
  const counter = await Counter.deploy(9);

  await counter.deployed();
  console.log("合约地址：", counter.address);

  console.log("Counter deployed to:", counter.address);
  //储存部署信息在文件
  let artifact = await artifacts.readArtifact("Counter");
  await writeAbiAddr(artifact, counter.address, "Counter", network.name);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
