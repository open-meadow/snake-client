const net = require('net');
const connect = require('./client');

// establishes a connection with the game server
// const connect = () => {
//   const conn = net.createConnection({
//     host: "165.227.47.243",
//     port: 50541
//   });

//   // interpret incoming data as text
//   conn.setEncoding("utf8");

//   // conn.on("connect", () => {conn.write("I am a snake")});
  
//   conn.on("data", (messageFromServer) => {
//     // code that does something when the connection is first established
//     console.log("The server says: ", messageFromServer);
//   });

//   return conn;
// };

console.log("Connecting...");
connect();