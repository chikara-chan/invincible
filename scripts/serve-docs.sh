#!/usr/bin/env bash
set -e

PATH=$(npm bin):$PATH
ROOT_DIR=$(cd $(dirname $0)/..; pwd)
cd $ROOT_DIR/docs

rimraf public db.json
hexo server
