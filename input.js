let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (data) => {handleUserInput(data);});
  return stdin;
};

const handleUserInput = function (data) {
  console.log(data)
  if(data === '\u0003') return process.exit();
};

module.exports = {setupInput};