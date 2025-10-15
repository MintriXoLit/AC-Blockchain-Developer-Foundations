import { ethers } from "ethers";
import * as dotenv from "dotenv";
import { Mttoken } from "./typechain-types/contracts/Mytoken.sol";
import { mytokenSol } from "./typechain-types/contracts";

dotenv.config();

async function main() {
  // Kết nối RPC network Sepolia
  const provider = new ethers.JsonRpcProvider("https://eth-sepolia.public.blastapi.io");
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!,provider);
  // Địa chỉ ví deployer (phải trùng với ví bạn dùng để deploy)
  const deployerAddress = new ethers.Wallet(process.env.PRIVATE_KEY!).address;

  // ABI rút gọn (cho ERC20)
  const abi = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function balanceOf(address) view returns (uint256)",
    "function totalSupply() view returns (uint256)",
    "function mintother(address _to, uint256 _value)"
  ];

  // Địa chỉ contract bạn vừa deploy
  const contractAddress = "0xfBed5D730B84d9D25Bf9e441d5Ec2C408dB101C8";

  // Tạo đối tượng contract
  const contract = new ethers.Contract(contractAddress, abi, wallet);

  console.log("===========================");
  console.log("Checking deployer balance...");
  console.log("===========================");

  // Lấy thông tin
  const tx= await contract.mintother("0x43E0fe67F74166027439eAb12d3C94F0099C04D3",500);

  const name = await contract.name();
  const symbol = await contract.symbol();
  const balance = await contract.balanceOf(deployerAddress);
  const totalSupply = await contract.totalSupply();
  console.log(`Token Name: ${name}`);
  console.log(`Symbol: ${symbol}`);
  console.log(`Total Supply: ${ethers.formatUnits(totalSupply, 1)} ${symbol}`);
  console.log(`Deployer Balance: ${ethers.formatUnits(balance, 1)} ${symbol}`);


}

main().catch(console.error);
