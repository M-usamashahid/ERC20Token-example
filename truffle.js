



module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    QA: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "3", // Match any network id
      from: "0xb1d77511870a37bf8a535f1115cecf4e918eb04e"

    },
    prod: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "1" // Match any network id
    }
  }
};