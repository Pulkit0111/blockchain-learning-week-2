// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// uncomment the following import statement
// import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract BasicERC20Token {
    string public name;
    string public symbol;
    uint8 public decimals;
    uint256 public totalSupply;

    mapping(address => uint256) public balances;

    address public owner;

    constructor(
        string memory _name,
        string memory _symbol,
        uint8 _decimals,
        uint256 _initialSupply
    ) {
        name = _name;
        symbol = _symbol;
        decimals = _decimals;
        totalSupply = _initialSupply * 10**uint256(_decimals);
        balances[msg.sender] = totalSupply;
        owner = msg.sender;
    }

    function mint(address to, uint256 amount) public {
        require(msg.sender == owner, "Only the owner can mint");
        require(to != address(0), "Invalid address");
        balances[to] += amount;
        totalSupply += amount;
    }

    function burn(uint256 amount) public {
        require(msg.sender == owner, "Only the owner can burn");
        require(balances[msg.sender] >= amount, "Insufficient balance");
        balances[msg.sender] -= amount;
        totalSupply -= amount;
    }

    function transfer(address to, uint256 amount) public {
        require(to != address(0), "Invalid address");
        require(balances[msg.sender] >= amount, "Insufficient balance");
        balances[msg.sender] -= amount;
        balances[to] += amount;
    }
}
