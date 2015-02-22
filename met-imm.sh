#!/bin/sh
cd src
NODE_OPTIONS="--debug-brk --debug=4002" meteor -p 4000 run
