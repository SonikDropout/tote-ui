#!/bin/bash

set -e

# MAIN APP INSTALLATION
npm i
npm run build

# MAIN APP AUTOSTART
echo '/home/pi/tote-ui/dist/linux-armv7l-unpacked/tote-ui' > ~/.xinitrc
chmod +x ~/.xinitrc

reboot
