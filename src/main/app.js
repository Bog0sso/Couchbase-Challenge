const express = require('express');
const couchbase = require('couchbase');
const CONFIGURATION = require('../../config').CONFIGURATION;
const uuid = require('uuid')
const app = express();
const vehiculesRoutes = require('../main/routes/vehiculesRoutes')

app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


console.log("#logging# password:" + CONFIGURATION.PASSWORD)
console.log("#logging# dbuser:" + CONFIGURATION.DBUSER)


app.use('/api/vehicules', vehiculesRoutes);

module.exports=app;
