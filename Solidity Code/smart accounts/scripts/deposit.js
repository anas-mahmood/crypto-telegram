const hre = require("hardhat");

const EP_ADDRESS = "0x4a3871C90Cfd96B4ADdD07a72b4C8C6C02A505F8";
const PM_ADDRESS = "0xDcD7262ceBF27889cCCdcc7e975085D8d938394d";

async function main() {
  const entryPoint = await hre.ethers.getContractAt("EntryPoint", EP_ADDRESS);

  await entryPoint.depositTo(PM_ADDRESS, {
    value: hre.ethers.parseEther(".2"),
  });

  console.log("deposit was successful!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
