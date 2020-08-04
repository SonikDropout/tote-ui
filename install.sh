# INSTALL REQUIRED PACKAGES
sudo apt-get install -y libudev-dev &&

# MAIN APP INSTALLATION
npm i &&
npm run build &&
sudo mkdir /opt/microtubes
sudo cp -rf dist/linux-armv7l-unpacked/** /opt/microtubes/

# MAIN APP AUTOSTART
echo '/opt/microtubes/MicroTubes' > ~/.xinitrc
chmod +x ~/.xinitrc

while read p; do sudo systemctl disable "$p"; done < unused-packages.list

reboot
