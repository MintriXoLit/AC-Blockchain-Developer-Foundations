// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract Vonting{
    error NotOwner();
    error HasVoted();
    error NotCandidate();
    error AlreadyExists();
    event Voted(address voter, uint candidateId);
    address owner;
    uint candidateCount;
    struct Candidate{
        string name;
        uint voteCount;
    }
    constructor() {
        owner=msg.sender;
    }
    modifier OnlyOwner{
        if(msg.sender!=owner)
        {
            revert NotOwner();
        }
        _;
    }
    mapping (uint=>Candidate) public candidates; 
    mapping (address=>bool) public hasVoted;
    function addCandidate(string memory _name) public OnlyOwner
    {
       
        candidates[candidateCount]=Candidate(_name,0);
        candidateCount++;
    }
    function vote(uint _a) public {
        if(hasVoted[msg.sender]) {
            revert HasVoted();
        }
        if(_a>=candidateCount)
        {
            revert NotCandidate();
        }
        hasVoted[msg.sender]=true;
        candidates[_a].voteCount+=1;
        emit Voted(msg.sender, _a);
    }
    function getVoteCount() public view returns (string memory name,uint voteCount)
    {
        for ( uint i= 0;i<candidateCount ; i++) 
        {
            return(candidates[i].name,candidates[i].voteCount);
        }
    }

}