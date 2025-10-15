// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
contract Mttoken is ERC20{
    constructor() ERC20("Mttoken","Mttk") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }
    function mintother( address _to, uint256 _value) public {
        _mint(_to, _value);
    }
    
    function decimals() public pure override returns (uint8) {
        return 18;
    }
}