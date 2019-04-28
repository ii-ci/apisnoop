#1/bin/bash
set -e
set -x
mkdir -p $ARTIFACTS
env | tee $ORTIFACTS/env
