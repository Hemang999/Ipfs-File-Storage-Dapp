module.exports = 
{
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: 
  {
		
    //Network configuration for Ganache RPC
    development: 
    {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
		
    //Network configuration for default private testnet
    ourTestNet:                
    {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" 
    }
  }
};
