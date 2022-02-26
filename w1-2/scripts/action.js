const { ethers, network } = require('hardhat');
const Counter = require(`../deployments/dev/${network.name}-Counter.json`);


async function main() {
  const [deployer] = await ethers.getSigners();
  //获取合约实例
  let counter = await ethers.getContractAt(Counter.contractName, Counter.address, deployer);
  console.log("count之前", await counter.counter());
  console.log("count", await counter.count());
  console.log("count之后", await counter.counter());
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
});