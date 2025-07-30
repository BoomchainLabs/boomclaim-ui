async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying with:", deployer.address);

  const BoomClaim = await ethers.getContractFactory("BoomClaim");
  const contract = await BoomClaim.deploy();
  await contract.deployed();
  console.log("Deployed to:", contract.address);

  try {
    await hre.run("verify:verify", {
      address: contract.address,
      constructorArguments: [],
    });
  } catch (err) {
    console.error("Verification failed:", err);
  }
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
