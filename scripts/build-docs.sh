#!/usr/bin/env bash
set -e

PATH=$(npm bin):$PATH
ROOT_DIR=$(cd $(dirname $0)/..; pwd)

cd $ROOT_DIR/docs

WATCH_MODE=false

for i in $@; do
  if [ $i == --watch ]; then
    WATCH_MODE=true
    break
  fi
done

rimraf public db.json

if [ $WATCH_MODE ]; then
  hexo generate
else
  hexo generate --watch
fi
