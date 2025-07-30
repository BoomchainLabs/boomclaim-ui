// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract BoomClaim {
    address public owner;
    mapping(address => bool) public claimed;

    constructor() {
        owner = msg.sender;
    }

    function claim() external {
        require(!claimed[msg.sender], "Already claimed");
        claimed[msg.sender] = true;
        // Token distribution or logic here
    }

    function hasClaimed(address user) external view returns (bool) {
        return claimed[user];
    }
}
