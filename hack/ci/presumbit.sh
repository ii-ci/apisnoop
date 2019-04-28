#1/bin/bash
set -e
set -x
mkdir -p $ARTIFACTS
env | tee $ARTIFACTS/env
cat <<TMATE $HOME/.tmate.conf
set-option -g set-clipboard on
set-option -g mouse on
set-option -g history-limit 50000
set -g tmate-identity ""
set -s escape-time 0
TMATE
curl https://github.com/tmate-io/tmate/releases/download/2.2.1/tmate-2.2.1-static-linux-amd64.tar.gz | tar xvfzC $HOME
find $HOME
sleep 9999999
ls -la /logs/artifacts
find /logs/artifacts
