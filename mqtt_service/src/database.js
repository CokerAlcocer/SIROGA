const mysql = require('mysql');
const { promisify } = require('util');
const { database } = require('./keys.js');
const pool = mysql.createPool(database);

pool.getConnection((err, conn) => {
    if(err){
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.log('database_closed');
        }else if(err.code === 'ER_CON_COUNT_ERROR'){
            console.log('all_connections_used');
        }else if(err.code === 'ECONNREFUSED'){
            console.log('connection_refused');
        }
    }

    if(conn){
        conn.release();
        console.log("database_connected");
        return;
    }
});

pool.query = promisify(pool.query);
module.exports = pool;