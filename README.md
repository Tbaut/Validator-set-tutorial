# Validator-set-tutorial


### Accounts
- Alice: `0xc6fe8f53e90391cafe9a1626bff815ac87b2739f`
- Node0: `0x4e22ce57319ec0ae55391713e99fdeb5cd06d815`
- Node1: `0x87ac4d8b3a89d7375fb9687ab1284cc22d7916f1`

### Contracts

The genesis deploys:
- RelaySet at address `0x00..5`
- OwnedRelayedSet at `0x00..6` passing the params `_relaySet: 0x00..5` and `_initial: ["0x4e22ce57319ec0ae55391713e99fdeb5cd06d815"]` corresponding to Node0.

### Remix

Connected to Alice node (8545)

I want to call `setRelay(0x0000000000000000000000000000000000000005)`, but before Remix sends an RPC to know the amount of gas:
```solidity
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_estimateGas","params":[{"from": "0xc6fe8f53e90391cafe9a1626bff815ac87b2739f", "to": "0x0000000000000000000000000000000000000006", "data": "0xc805f68b0000000000000000000000000000000000000000000000000000000000000005"}],"id":1}' -H "Content-Type: application/json" -X POST localhost:8545
```

This errors out, [the issue #8675 relates to it](https://github.com/paritytech/parity-ethereum/issues/8675): 
```
{"jsonrpc":"2.0","error":{"code":-32015,"message":"Transaction execution error.","data":"Internal(\"Requires higher than upper limit of 80000000\")"},"id":1}

```

Calling the transaction still, the transaction execution fails (status: `0x0`)


