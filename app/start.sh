#/bin/bash

while !</dev/tcp/postgresdb/5432; do sleep 1; done;
knex migrate:latest
knex seed:run
nodemon ./src/index.js --exec "node --require '@babel/register'"