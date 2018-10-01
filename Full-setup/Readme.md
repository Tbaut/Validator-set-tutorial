# End result of Parity's Validator-set tutorial

This repo contains all the configuration files as well as the account keys and blockchain data from the [Validator-Set tutorial](https://wiki.parity.io/Validator-Set-Tutorial-Overview).

Nodes:
- `Node0`: `0xa2922fec00bb29fe13d68e87f64b9ad1719ed64a`
- `Node1`: `0x32784591c38bf8aa081e96ba4db462bd73a3179e`
- `Alice`: `0x12db1ee91481573302f63ebf3d735820081c68a2`

The Validator-set contracts are deployed:
- `RelaySet` is deployed at: `0x79dd7e4c1b9adb07f71b54dba2d54db2fa549de3`
- `RelayOwnedSet` is deployed at: `0x12db1ee91481573302f63ebf3d735820081c68a2`

`Alice` is the owner of the contract.
`Node0` and `Node1` are validators.

Strart all the nodes at once with: `./start.sh` and stop them with `./stop.sh`
