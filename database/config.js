require('dotenv').config();

module.exports = {
  development: {
    dialect: process.env.DB_DIALECT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE + "_" + process.env.NODE_ENV,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
  },
  staging: {
    dialect: process.env.DB_DIALECT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE + "_" + process.env.NODE_ENV,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
  },
  production: {
    dialect: process.env.DB_DIALECT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE + "_" + process.env.NODE_ENV,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
  }
};
