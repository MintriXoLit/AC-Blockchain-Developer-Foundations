// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract ba_2{
 address public owner;
 uint public minAge;
 constructor(){
    minAge=18;
    owner=msg.sender;

 }   
 modifier onlyOwner(){
     require(msg.sender==owner,"not owner");
     _;
 }
 function checkEligibility(uint age)public view returns(bool){
    if (age>=minAge)
    {
        return true;
    }
    return false;
 }
 function updateMinAge(uint newMinAge)public onlyOwner{
    minAge=newMinAge;
 }
}