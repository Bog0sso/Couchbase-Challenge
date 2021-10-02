const express = require('express')
const couchbase = require('couchbase');
const uuid = require('uuid');
const CONFIGURATION = require("../../../config").CONFIGURATION;
const cluster = new couchbase.Cluster(process.env.URL_DATABASE, {
  username: process.env.DBUSER,
  password: process.env.PASSWORD,
})
module.exports.createVehicule = (req, res, next) => {

  let vehicule = req.body;
  console.log(vehicule);


  const bucket = cluster.bucket(process.env.BUCKET);
  bucket.scope(process.env.SCOPE)
    .collection(process.env.COLLECTION)
    .upsert(uuid.v4(), vehicule)
    .catch(error => { console.log(error) });

  console.log("Vehicule information inserted  #DATABASE#")
  res.status(201).json({ message: 'Vehicule created! #BROWSER#' });

};



// module.exports.editVehicule_Id=(req,res,next)=>{
//     
//   };



//   module.exports.deleteVehicule_Id=(req,res,next)=>{
//    
//   };



module.exports.getVehicule_Id = (req, res, next) => {
  const bucket = cluster.bucket(process.env.BUCKET);
  
  let vehicule= bucket.scope(process.env.SCOPE).collection(process.env.COLLECTION).get("2").value;
  console.log("Vehicule found #DATABASE#")
  console.log(vehicule.then(value => res.status.json({value})))

};



// module.exports.getAllVehicules= (req, res, next) => {
//   
// };