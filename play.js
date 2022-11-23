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

const handleUserInput = function(input) {
  console.log(("Byeeeeee"));
  console.log(input);
  if (input === '\u0003') {
    process.exit();
  }
};

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf-8');
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
}

setupInput();