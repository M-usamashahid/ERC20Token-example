pragma solidity ^0.4.18;

import "./zeppelin-solidity/Crowdsale.sol";
import "./zeppelin-solidity/token/MintableToken.sol";
import "./BlueToken.sol";



contract BlueCrowdsale is Crowdsale {

  function BlueCrowdsale( uint256 _rate, address _wallet, MintableToken _token) public
    Crowdsale(_rate, _wallet, _token)
  {
    
  }
  function createTokenContract() internal returns (MintableToken) {
      return new BlueToken();
  }
}
