#!/bin/bash

set -e
cd ~/tote-ui
git pull
npm run build
reboot
