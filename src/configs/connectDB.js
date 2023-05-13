import mysql from 'mysql2/promise';

// // create the connection to database

console.log("Creating connection pool...");

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'nodejsbasic',
    password: '189955'
})


export default pool;