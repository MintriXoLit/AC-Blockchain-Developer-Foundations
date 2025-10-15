import {ethers} from "hardhat"
import {MtNFT} from "./typechain-types/contracts/MyNFT.sol/MtNFT"
async function main() {
    const target="0x43E0fe67F74166027439eAb12d3C94F0099C04D3";
    const mtNFT:MtNFT = await ethers.getContractAt("MtNFT","0x49d432a4c5EA31a4c1037D083Fc6900D4cB72616");
    const tx= await mtNFT.mint(target);
    await tx.wait();
    const balance=await mtNFT.balanceOf(target);
    console.log(`Số dư token của ${target}:`, balance.toString());
    const owner= await mtNFT.ownerOf(0);
     console.log(` token "0" của:`, owner.toString());
     const total=await mtNFT.nextId();
     console.log(`Tong nft ton tai:`,total.toString());
}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });