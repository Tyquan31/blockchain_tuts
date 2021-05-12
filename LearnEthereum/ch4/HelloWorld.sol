pragma solidity >=0.5.0;

/* 
    Hello World Contract
*/

contract HelloWorld
{
    string public greeting;

    constructor () public {
        greeting = 'Hello World from Learn Ethereum';
    }

    funtion hello() public view returns (string memory) {
        return greeting;
    }

    function setGreeting(string memory _greeting) public {
        greeting = _greeting;
    }
}