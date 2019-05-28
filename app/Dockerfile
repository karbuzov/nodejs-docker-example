FROM node:8

WORKDIR /usr/src/app

COPY database/ database/
COPY package*.json ./
COPY knexfile.js ./
COPY babel.config.js ./
COPY src ./src

RUN npm install

RUN npm i -g nodemon dotenv @babel/register knex
COPY start.sh /

EXPOSE 8080