#!/bin/bash
parity --config ./node0.toml &
parity --config ./node1.toml &
parity --config ./alice.toml
