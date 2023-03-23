# zkEVM NFT Tutorial

This is a sample code base to show how to deploy an ERC721 contract to zkEVM Testnet.

---

## Requirements

Make sure you have the following installed on your computer before proceeding.

- NVM or Node `v18.15.0`

---

## Getting Started

These are the basic steps to get the NFT deployed to zkEVM Testnet.

### Environment Variables

Copy the `.env.example` and fill in the blanks for the following details:

```bash
# FROM: ./zkevm-erc721-hardhat

cp .env.example .env;
```

**File:** `./env`

```toml
RPC_MUMBAI_URL=https://rpc.ankr.com/polygon_mumbai
RPC_ZKEVM_URL=https://rpc.public.zkevm-test.net
WALLET_PRIVATE_KEY=<YOUR-WALLET-PRIVATE-KEY>
```

### Compile Code

```bash
# FROM: ./zkevm-erc721-hardhat

npx hardhat compile;

# Expected Output:
# Generating typings for: 12 artifacts in dir: typechain-types for target: ethers-v5
# Successfully generated 36 typings!
# Compiled 12 Solidity files successfully
```

### Deploy Contract

**NOTE:** Make sure your wallet has zkEVM Bridged Eth Tokens via the [zkEVM Testnet Bridge](https://public.zkevm-test.net).

```bash
# FROM: ./zkevm-erc721-hardhat

npx hardhat run scripts/deploy.ts --network zkevmTestnet;

# Expected Output:
# zkEVMNFT deployed to 0x306be32649306d476aB03A7eED9c96079573e0d2
```

---

## Verifying Contract

If you'd like to verify your contract on the [zkEVM Testnet Block Explorer](https://explorer.public.zkevm-test.net), you can do so with the Standard Input File `verify.json`.

Make sure that the data in the `./verify.json` corresponds to the generated build file `input` value in `./artifacts/build-info/your-generated-build.json`.

**Example:** `./artifacts/build-info/your-generated-build.json`

```js
{
    "id": "ac26dcbce0b086a50b500dc21ff3a05e",
    "_format": "hh-sol-build-info-1",
    "solcVersion": "0.8.18",
    "solcLongVersion": "0.8.18+commit.87f61d96",
    // Everything in this `input`
    "input": {
        "language": "Solidity",

// ...
```



