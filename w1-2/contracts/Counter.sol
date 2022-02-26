//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Counter { 
    
    uint public counter; 

    constructor(uint x) { 
        counter = x; 
    } 

    function count() public { 
        counter = counter + 1; 
        console.log("curr counter:", counter);
    } 

    function add(uint x) public { 
        counter = counter + x; 
        console.log("curr counter:", counter);
    } 
 
 }
