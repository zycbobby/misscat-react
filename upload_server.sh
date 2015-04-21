# Noted that you have remove the remo
ssh root@misscatandzuozuo.info rm -rf /mnt/ext/misscat-react/
ssh root@misscatandzuozuo.info mkdir /mnt/ext/misscat-react/
ssh root@misscatandzuozuo.info mkdir /mnt/ext/misscat-react/dist
ssh root@misscatandzuozuo.info mkdir /mnt/ext/misscat-react/server

scp -r ./dist/ root@misscatandzuozuo.info:/mnt/ext/misscat-react/dist
scp ./Dockerfile root@misscatandzuozuo.info:/mnt/ext/misscat-react/Dockerfile
scp ./package.json root@misscatandzuozuo.info:/mnt/ext/misscat-react/package.json
scp -r ./server/ root@misscatandzuozuo.info:/mnt/ext/misscat-react/server


# What you should do after uploading
# docker-compose build
# docker-compose kill
# docker-compose rm
# docker-compose up
# docker-compose start mongo
# docker-compose start crawler
