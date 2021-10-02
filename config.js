const couchbase = require('couchbase');
const dotenv = require('dotenv');
dotenv.config();

module.exports.CONFIGURATION = {
    URL_DATABASE: process.env.URL_DATABASE,
    DBUSER: process.env.DBUSER,
    PASSWORD: process.env.PASSWORD,
    BUCKET: process.env.BUCKET,
};