#!/bin/bash
cd /home/ec2-user/myapp

# Stop any existing Node.js process
pkill node || true

# Install PM2 process manager
npm install -g pm2

# Start your app with PM2
pm2 start index.js --name "myapp"
pm2 save
