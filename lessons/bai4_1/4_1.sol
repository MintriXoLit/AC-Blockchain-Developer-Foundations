// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract StudentRegistry {
    error StudentAlreadyRegistered();
    error NotOwner();
    address public owner;
    constructor(){
        owner=msg.sender;
    }
    struct Student
    {
        string name;
        uint age;
        bool isRegistered;
    }
    modifier OnlyOwner{
        if(msg.sender!=owner){
            revert NotOwner();
        }
        _;
    }

    mapping (address=>Student) public students;
    function registerStudent(string memory _name, uint _age) internal   {
        if(students[msg.sender].isRegistered==true){
            revert StudentAlreadyRegistered();
        }
        students[msg.sender] = Student(_name, _age, true);
    }
    function getstudent(address _user) view public returns(string memory,uint,bool)
    {
        return(students[_user].name,students[_user].age,students[_user].isRegistered);
    }
    function isStudentRegistered(address _user) view public returns(bool)
    {   
        return students[_user].isRegistered;
    } 
}
contract StudentRegistrytest is StudentRegistry{
    function testRegisterStudent(string memory _name, uint _age) external   {
        registerStudent(_name, _age);
    }
}