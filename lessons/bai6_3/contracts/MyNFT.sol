// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
contract MtNFT is ERC721 {
    error NotOwner();
    uint256 public nextId;
    address owner ;
    constructor() ERC721("MtNFT", "MTNFT") {
        owner=msg.sender;
    }
    modifier Owner{
        if(msg.sender != owner){
            revert NotOwner();
        }
        _;
    }
    function mint(address _to) public Owner{
        _safeMint(_to,nextId);
        nextId++;
    }
    function mintother(address _to) external{
        _safeMint(_to, nextId);
        nextId++;
    }
    
}