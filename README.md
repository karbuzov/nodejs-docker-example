# Docker

#### Download image from Docker Hub 
    docker pull nginx

docker build -t olsy/app .

#### Image list
    docker images

docker run -p 49160:8080 -d olsy/node-server-app

#### Container list
    docker ps

docker exec -it <container id> /bin/bash

#### Stop container
    docker stop <container id>

#### Remove container
    docker rm <container id>

#### Remove image
    docker image rm <image id>
    -- or --
    docker rmi $(sudo docker images --filter "dangling=true" -q --no-trunc)
    sudo docker rmi -f <image id>
    

docker run --rm --name pg -e POSTGRES_PASSWORD=docker -d -p 5432:5432 -v $HOME/docker/volumes/postgres:/var/lib/postgresql/data postgres

docker run --rm --name pg -v /my/own/datadir:/var/lib/postgresql/data -d postgres

    docker logs <container id>

    docker-compose up

    docker-compose build
    
    
    
    
docker run --rm --name pg -e POSTGRES_HOST=127.0.0.1 -e POSTGRES_PORT=5432 -e POSTGRES_DB=test -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=1111 -d -p 5432:5432 postgres
docker run --rm --name redis -d -p 6379:6379 redis

node --require 'dotenv/config' --require 'babel-register' index.js

nodemon app/src/index.js --exec "node --require 'dotenv/config' --require '@babel/register'"

