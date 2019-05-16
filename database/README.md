## Knex Cli 

##### Create configuration file

    knex init
    
##### Create migration (create table)
    
    knex migrate:make <name>
    
##### Create seed (insert rows to table)
    
    knex seed:make <name>
    
##### Apply all migrations
    
    knex migrate:latest
    
##### Apply all seeds
    
    knex seed:run
    
##### Rollback all changes
    
    knex migrate:rollback