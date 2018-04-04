# Blue Token Generation 


## Deployment Flow

- Deploy `BlueToken.sol`. The listing can be done by a standard private key or a multi-sig key, which is the owner of the contract. The blue token, inheriting multiple zeppline contract. An admin account address and the total amount of tokens are passed and used to initialize the Blue token. 



## Deployment Config

In `/migrations/2_deploy_contracts.js`, we may specify the rate  and total number of tokens. E.g.

```
const Rate = 1;
    const Token = 10 * 10 * 18
```

## Deployment Steps

### Deploy using truffle: 

To test on the Ropsten network, execute `truffle migrate --network ropsten` which uses the existing API keys in `/truffle.js`.
To Compile on mainnet, execute `truffle compile`.
To deploy on mainnet, execute `truffle migrate`.


## Use of zeppelin code
We use open-zepplin code for `SafeMath`, `Ownable`,  `Crowdsale`,`StandardToken` and `Mintable` logic.
