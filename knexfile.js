require('dotenv').load();

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/posts_development'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/posts_test'
  }

};
