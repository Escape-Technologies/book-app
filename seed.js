const knex = require('knex');

const client = knex({
  client: 'sqlite3',
  connection: {
    filename: 'db.sql',
    flags: ['OPEN_URI', 'OPEN_SHAREDCACHE'],
  },
});

client.schema
  .createTable('users', (table) => {
    table.increments();
    table.string('email').notNullable().unique();
    table.string('password').notNullable();
    table.string('role').notNullable()
  })
  .then(() => {
    console.log('Table succesfully created');
    client.destroy();
  });
