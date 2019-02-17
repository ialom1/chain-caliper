#!/bin/bash
#
# Exit on first error
set -e
#
#
node benchmark/simple/main.js -c config.yaml -n ../../network/fabric-v1.2/fabric-node.json
