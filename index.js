"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const sequelize_1 = require("sequelize");
const connection = new sequelize_1.Sequelize({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    dialect: 'postgres',
    timezone: process.env.DB_TIMEZONE,
    logging: false,
});
exports.connection = connection;
//# sourceMappingURL=index.js.map