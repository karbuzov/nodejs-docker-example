exports.up = knex =>
  knex.schema.createTable('users', (table) => {
    table.increments('id').unsigned().primary();
    table.string('email').unique().notNull();
    table.string('password').notNull();
    table.string('firstName').nullable();
    table.string('lastName').nullable();
    table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updatedAt').nullable();
    table.timestamp('deletedAt').nullable();
  });

exports.down = knex => knex.schema.dropTable('users');
