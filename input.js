const { connect } = require("http2");
let connection;

const handleUserInput = function(input) {
  console.log("Input is", input);
  
  if (input === '\u0003') {
    console.log(("Byeeeeee"));
    process.exit();
  }

  if(input === "w") {
    console.log("w");
    connection.write("Move: up");    
  }

  if(input === "a") {
    console.log("a");
    connection.write("Move: left");    
  }

  if(input === "s") {
    console.log("s");
    connection.write("Move: down");    
  }

  if(input === "d") {
    console.log("d");
    connection.write("Move: right");    
  }
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf-8');
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
}

module.exports = setupInput;