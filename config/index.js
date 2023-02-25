require('dotenv').config();
let {createPool} = require('mysql');
let connection = createPool({
    hosts: process.env.DB_HOST,
    database: process.env.dbName,
    user: process.env.bdUser,
    password: process.env.dbPass,
    port: process.env.dbPort,
    multipleStatements:true
})
module.exports = connection;