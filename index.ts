import { Sequelize } from 'sequelize';

const connection = new Sequelize({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  dialect: 'postgres',
  timezone: process.env.DB_TIMEZONE,
  logging: false,
});

export { connection };