#!/bin/sh
cd ~
wget https://bin.equinox.io/c/VdrWdbjqyF/cloudflared-stable-linux-amd64.deb
apt-get install ~/cloudflared-stable-linux-amd64.deb
mkdir /etc/cloudflared/
echo 'cHJveHktZG5zOiB0cnVlCnByb3h5LWRucy1wb3J0OiA1MDUzCnByb3h5LWRucy11cHN0cmVhbToKICAtIGh0dHBzOi8vMS4xLjEuMS9kbnMtcXVlcnkKICAtIGh0dHBzOi8vMS4wLjAuMS9kbnMtcXVlcnk=' | base64 --decode > /etc/cloudflared/config.yml
cloudflared service install
systemctl start cloudflared
