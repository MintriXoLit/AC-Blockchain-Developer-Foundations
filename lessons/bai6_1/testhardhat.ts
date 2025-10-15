  import { ethers } from "hardhat";
  import {Mttoken} from "./typechain-types/contracts/Mytoken.sol/Mttoken";

  async function main() {

    const target="0x43E0fe67F74166027439eAb12d3C94F0099C04D3";
    const mttoken : Mttoken = await  ethers.getContract("MTtoken");
    const tx = await mttoken.mintother(target,500);
    await tx.wait();
    console.log(tx.blockHash);
    const balance = await mttoken.balanceOf(target);
  console.log(`Số dư token của ${target}:`, balance.toString());


  }

  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
