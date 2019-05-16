FROM node:8

# Create app directory
WORKDIR /usr/src/app

RUN npm i -g nodemon dotenv @babel/register knex

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where availabledocke (npm@5+)
COPY database/ /usr/src/app/database/
COPY package*.json /usr/src/app/
COPY knexfile.js /usr/src/app/
COPY babel.config.js /usr/src/app/

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

COPY src ./src

# Bundle app source
#VOLUME .:/usr/src/app

EXPOSE 8080

ENV PORT 8080

#CMD -sh "nodemon ./src/index.js --exec \"node --require 'dotenv/config' --require '@babel/register'\""

