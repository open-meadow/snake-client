const net = require('net');

const connect = () => {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // conn.on("connect", () => {conn.write("I am a snake")});
  conn.on("connect", () => {
    // console.log(connect);
    console.log("Connection Established");
  })

  conn.on("data", (messageFromServer) => {
    conn.write("me is snek")
    conn.write("Name: yay");
    // code that does something when the connection is first established
    console.log("The server says: ", messageFromServer);
  });
  
  
  return conn;
};

module.exports = connect;
// conn.write("Name: yay");
// setTimeout(() => {
//   conn.write("Move: right")
// }, 500);

// setTimeout(() => {
//   conn.write("Move: up");
// }, 500);

// setTimeout(() => {
//   conn.write("Move: up");
// }, 1000);

// setTimeout(() => {
//   conn.write("Move: up");
// }, 1500);

// setTimeout(() => {
//   conn.write("Move: up");
// }, 2000);

// setTimeout(() => {
//   conn.write("Move: up");
// }, 2500);

// setTimeout(() => {
//   conn.write("Move: up");
// }, 3000);

// setTimeout(() => {
//   conn.write("Move: up");
// }, 3500);

// setTimeout(() => {
//   conn.write("Move: up");
// }, 4000);

// setTimeout(() => {
//   conn.write("Move: left");
// }, 1000);

// setTimeout(() => {
//   conn.write("Move: down");
// }, 1500);