const pg = require('pg');
const url = require('url');

let config = {
    host: 'localhost',
    port: 5432,
    database: 'movie_library',
    max: 10,
    idleTimeoutMillis: 30000,
};

const pool = new pg.Pool(config);

pool.on('connect', () => {
    console.log('Postgresql connected');
});

pool.on('error', (err) => {
    console.log('Unexpected error on idle client', err);
    process.exit(-1);
});

let pool = require('../modules/pool.js');

module.exports = pool;