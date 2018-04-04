pragma solidity ^0.4.18;

import "./zeppelin-solidity//token/MintableToken.sol";

/**
 * @title BlueToken
 * @dev Very simple ERC20 Token that can be minted.
 * It is meant to be used in a crowdsale contract.
 */
contract BlueToken is MintableToken {

  string public constant name = "Blue Token"; // solium-disable-line uppercase
  string public constant symbol = "BCT"; // solium-disable-line uppercase
  uint8 public constant decimals = 18; // solium-disable-line uppercase

}