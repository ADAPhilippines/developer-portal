module.exports = {
  someSidebar: {
    "Get Started": [
      "get-started/overview",
      {
        type: "category",
        label: "Cardano Components",
        items: [
          "get-started/cardano-components",
          "get-started/installing-cardano-node",
          "get-started/running-cardano",
          "get-started/installing-cardano-wallet",
        ],
      },
      {
        type: "category",
        label: "Builder Tools",
        items: [
          "get-started/blockfrost",
          "get-started/cardanocli-js",
          "get-started/dandelion-apis",
          "get-started/ogmios",
          {
            type: "category",
            label: "Serialization-Lib",
            items: [
              "get-started/cardano-serialization-lib/overview",
              "get-started/cardano-serialization-lib/prerequisite-knowledge",
              "get-started/cardano-serialization-lib/generating-keys",
              "get-started/cardano-serialization-lib/generating-transactions",
              "get-started/cardano-serialization-lib/transaction-metadata",
            ],
          },
        ],
      },
      "get-started/smart-contracts-signpost",
      "get-started/cardano-developer-community",
    ],
    "Integrate Cardano": [
      "integrate-cardano/overview",
      "integrate-cardano/creating-wallet-faucet",
      "integrate-cardano/listening-for-payments-cli",
      "integrate-cardano/listening-for-payments-wallet"
    ],
    "Build with Transaction Metadata": [
      "transaction-metadata/overview",
      "transaction-metadata/how-to-create-a-metadata-transaction",
    ],
    "Discover Native Tokens": [
      "native-tokens/overview",
      "native-tokens/minting",
      "native-tokens/minting-nfts",
      "native-tokens/cardano-token-registry"
    ],
    "Fund your Project": [
      "fund-your-project/overview", 
      "fund-your-project/project-catalyst", 
      "fund-your-project/alternatives"
    ],
    "Operate a Stake Pool": [
      "stake-pool-operation/overview",
      "stake-pool-operation/cardano-key-pairs",
      {
        type: "category",
        label: "Stake Pool Course",
        items: [
          "stake-pool-course/overview",
          "stake-pool-course/introduction-to-cardano",
          "stake-pool-course/lesson-1",
          "stake-pool-course/lesson-2",
          "stake-pool-course/lesson-3",
          "stake-pool-course/lesson-4",
          "stake-pool-course/lesson-5",
          {
            type: "category",
            label: "Handbook",
            items: [
              "stake-pool-course/handbook/setup-virtual-box-written",
              "stake-pool-course/handbook/setup-a-server-on-aws-written",
              "stake-pool-course/handbook/setup-firewall",
              "stake-pool-course/handbook/install-cardano-node-written",
              "stake-pool-course/handbook/run-cardano-node-handbook",
              "stake-pool-course/handbook/use-cli",
              "stake-pool-course/handbook/utxo-model",
              "stake-pool-course/handbook/keys-addresses",
              "stake-pool-course/handbook/create-simple-transaction",
              "stake-pool-course/handbook/create-stake-pool-keys",
              "stake-pool-course/handbook/register-stake-keys",
              "stake-pool-course/handbook/generate-stake-pool-keys",
              "stake-pool-course/handbook/configure-topology-files",
              "stake-pool-course/handbook/register-stake-pool-metadata",
              "stake-pool-course/handbook/apply-logging-prometheus",
            ],
          },
          {
            type: "category",
            label: "Assignments",
            items: [
              "stake-pool-course/assignments/assignment-1",
              "stake-pool-course/assignments/assignment-2",
              "stake-pool-course/assignments/kes_period",
            ],
          },
        ],
      },
      "stake-pool-operation/marketing-stake-pool",
    ],
    "Contribute to the Developer Portal": [
      "portal-contributors",
      "portal-contribute",
      "portal-style-guide",
    ],
  },
};
