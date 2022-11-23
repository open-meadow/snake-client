const { connect } = require("http2");
const {MOVE_UP_KEY, MOVE_DOWN_KEY, MOVE_LEFT_KEY, MOVE_RIGHT_KEY, EXIT} = require('./consts');
let connection;

const handleUserInput = function(input) {
  console.log("Input is", input);
  
  if (input === EXIT) {
    console.log(("Byeeeeee"));
    process.exit();
  }

  if(input === MOVE_UP_KEY) {
    console.log("w");
    connection.write("Move: up");    
  }

  if(input === MOVE_LEFT_KEY) {
    console.log("a");
    connection.write("Move: left");    
  }

  if(input === MOVE_DOWN_KEY) {
    console.log("s");
    connection.write("Move: down");    
  }

  if(input === MOVE_RIGHT_KEY) {
    console.log("d");
    connection.write("Move: right");    
  }

  if(input === "i") {
    console.log("i");
    connection.write("Say: MrFish");    
  }

  if(input === "k") {
    console.log("k");
    connection.write("Say: schlam");    
  }

  if(input === "j") {
    console.log("j");
    connection.write("Say: toit");    
  }

  if(input === "l") {
    console.log("l");
    connection.write("Say: kookoo");    
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