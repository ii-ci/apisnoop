#1/bin/bash
set -e
set -x
mkdir -p $ARTIFACTS
env | tee $ORTIFACTS/env
ls -la /logs/artifacts
find /logs/artifacts
