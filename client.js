const net = require('net');

const connect = () => {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // conn.on("connect", () => {conn.write("I am a snake")});
  
  conn.on("data", (messageFromServer) => {
    conn.write("me is snek")
    // code that does something when the connection is first established
    console.log("The server says: ", messageFromServer);
  });

  return conn;
};

module.exports = connect;