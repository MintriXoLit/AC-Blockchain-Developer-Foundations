import {HardhatRuntimeEnvironment} from "hardhat/types";
import {DeployFunction} from "hardhat-deploy/types";
const func : DeployFunction= async function (hre:HardhatRuntimeEnvironment) {
    const {deployments,getNamedAccounts}=hre;
    const {deploy}=deployments;
    const {deployer} =await getNamedAccounts();
    console.log("====================");
  console.log("Deploying MyToken Contract...");
  console.log("====================");
  await deploy("MintableToken",{contract:"MymintableToken",from:deployer,
    args: [], 
    log: true,
    autoMine: true,
  });
};
export default func;
func.tags = ["deploy"];