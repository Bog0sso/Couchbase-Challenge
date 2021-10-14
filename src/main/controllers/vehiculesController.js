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



  module.exports.deleteVehicule_Id=(req,res,next)=>{
  const bucket = cluster.bucket(process.env.BUCKET);
  console.log(req.params.id+"#DEBUGGING REQUEST "+Date.UTC() )
  let key=JSON.stringify(req.params.id)
  bucket.scope(process.env.SCOPE).collection(process.env.COLLECTION).remove(key).catch(error=>error);

  console.log("Vehicule deleted #DATABASE#")
res.status(200).json({message:'vehicule deleted #BROWSER#'})
  };



module.exports.getVehicule_Id = (req, res, next) => {
  const bucket = cluster.bucket(process.env.BUCKET);
  
  var vehicule= bucket.scope(process.env.SCOPE).collection(process.env.COLLECTION).get("3");
  console.log("Vehicule found #DATABASE#")
res.status(200).json({vehicule})
};



// module.exports.getAllVehicules= (req, res, next) => {
//   
// };