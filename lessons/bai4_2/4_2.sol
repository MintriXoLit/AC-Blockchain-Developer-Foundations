// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract StudentRegistryV2 {
    error StudentAlreadyRegistered();
    error notOwner();
    address owner;
    struct Student
    {
        string name;
        uint age;
        bool isRegistered;
    }
    constructor() {
        owner = msg.sender;
    }
    modifier OnlyOwner()
    {
        if(msg.sender != owner){
            revert notOwner();
        }
        _;
    }
    mapping (address=>Student) public students;
    function registerStudent(string memory _name, uint _age) public OnlyOwner{
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