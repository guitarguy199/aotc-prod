#!/bin/sh
sudo git pull origin main
sudo systemctl restart nginx
sudo pm2 restart all
