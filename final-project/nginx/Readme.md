# Setup for nginx

## Run this command to start nginx server
```
sudo nginx -c /mnt/c/Users/user/Documents/Database\ System/dbmaster/sp24-cs411-team065-DBMaster/final-project/nginx/nginx.conf
```
## Run this command to stop nginx server
```
sudo nginx -s stop
```
## .env.local in frontend directory should be changed
```
NEXT_PUBLIC_API_URL=127.0.0.1:80/api
```