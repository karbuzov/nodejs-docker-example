FROM node:8

WORKDIR /usr/src/app

RUN npm i -g nodemon dotenv @babel/register knex

COPY database/ /usr/src/app/database/
COPY package*.json /usr/src/app/
COPY knexfile.js /usr/src/app/
COPY babel.config.js /usr/src/app/

RUN npm install

COPY src ./src

EXPOSE 8080
ENV PORT 8080
