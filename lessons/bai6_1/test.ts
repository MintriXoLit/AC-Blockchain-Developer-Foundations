import { ethers } from "ethers";
import * as dotenv from "dotenv";

dotenv.config();

async function main() {
  // Kết nối RPC network Sepolia
  const provider = new ethers.JsonRpcProvider("https://eth-sepolia.public.blastapi.io");

  // Địa chỉ ví deployer (phải trùng với ví bạn dùng để deploy)
  const deployerAddress = new ethers.Wallet(process.env.PRIVATE_KEY!).address;

  // ABI rút gọn (cho ERC20)
  const abi = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function balanceOf(address) view returns (uint256)",
    "function totalSupply() view returns (uint256)"
  ];

  // Địa chỉ contract bạn vừa deploy
  const contractAddress = "0x0313eB5FbF60Cc087262De6285E36b0FF15D87DE";

  // Tạo đối tượng contract
  const contract = new ethers.Contract(contractAddress, abi, provider);

  console.log("===========================");
  console.log("Checking deployer balance...");
  console.log("===========================");

  // Lấy thông tin
  const name = await contract.name();
  const symbol = await contract.symbol();
  const balance = await contract.balanceOf(deployerAddress);
  const totalSupply = await contract.totalSupply();

  console.log(`Token Name: ${name}`);
  console.log(`Symbol: ${symbol}`);
  console.log(`Total Supply: ${ethers.formatUnits(totalSupply, 18)} ${symbol}`);
  console.log(`Deployer Balance: ${ethers.formatUnits(balance, 18)} ${symbol}`);
}

main().catch(console.error);
