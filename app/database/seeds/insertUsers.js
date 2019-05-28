exports.seed = knex =>
  knex('users').insert([
    {
      id: 1,
      email: 'bob.doe@gmail.com',
      password: 'test',
      firstName: 'Bob',
      lastName: 'Doe',
      createdAt: knex.fn.now()
    },
    {
      id: 2,
      email: 'chris.walensa@gmail.com',
      password: 'test',
      firstName: 'Chris',
      lastName: 'Walensa',
      createdAt: knex.fn.now()
    },
    {
      id: 3,
      email: 'john.smith@gmail.com',
      password: 'test',
      firstName: 'John',
      lastName: 'Smith',
      createdAt: knex.fn.now()
    },
  ]);
