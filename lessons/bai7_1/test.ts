import {deployments, ethers} from "hardhat";
import {MymintableToken} from "./typechain-types/contracts/MymintableToken";
async function main() {

    const [deployer] = await ethers.getSigners();
    console.log("Using deployer:", deployer.address);
    const Contract : MymintableToken = await ethers.getContract("MintableToken");
    const tx=await Contract.mint(deployer.address,1000);
    await tx.wait();
    const balance=await Contract.balanceOf(deployer.address);
    console.log("so du:",balance.toString());
}
main().catch((error=>{
     console.error(error);
    process.exitCode = 1;
}))