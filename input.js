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

module.exports = setupInput;