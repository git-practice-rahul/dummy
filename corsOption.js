var express = require('express')
var cors = require('cors')
var app = express()
 
var whitelist = ['http://localhost:5500']

var corsOptions = function (req, callback) {
  var corsOptions;
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
    callback(null, corsOptions) // callback expects two parameters: error and options
} else {
    corsOptions = { origin: false } // disable CORS for this request
    callback(null, corsOptions) // callback expects two parameters: error and options
}
}
 
module.exports = corsOptions