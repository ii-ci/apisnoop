#1/bin/bash
set -e
set -x
mkdir -p $ARTIFACTS
env | tee $ARTIFACTS/env
ls -la /logs/artifacts
find /logs/artifacts
