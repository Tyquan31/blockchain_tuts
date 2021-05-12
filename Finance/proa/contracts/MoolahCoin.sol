pragma solidity ^0.5.2;

import "../tokenwallet/node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";
import "../tokenwallet/node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Capped.sol";
import "../tokenwallet/node_modules/openzeppelin-solidity/contracts/ownership/Ownable.sol";

contract MoolahCoin is ERC20Detailed, ERC20Capped, Ownable {

    constructor()
    ERC20Detailed("Moolah Coin", "MC", 4)
    ERC20Capped(10000000000)
    payable public {}

}