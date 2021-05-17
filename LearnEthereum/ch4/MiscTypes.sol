pragma solidity >=0.5.0;

contract MiscTypes {
    address payable payor; // address type
    string hello = 'Hello World';
    bytes32[] public names;
    bytes[] empIds;

    uint term;
    bool transferable = true;
    int quantity = 10;
    uint treshold = 100;
    uint8[5] odds = [1,3,5,7,9]
}