const net = require('net');
const connect = require('./client');
const setupInput = require('./input');


console.log("Connecting...");
connect();

let connectVal = connect();
setupInput(connectVal);