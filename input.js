let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (data) => { handleUserInput(data); });
  return stdin;
};

const handleUserInput = function (data) {

  if (data === '\u0003') { return process.exit() };
  if (data === 'w') {
    connection.write("Move: up")
  };
  if (data === 's') {
    connection.write('Move: down')
  };
  if (data === 'a') {
    connection.write('Move: left')
  };
  if (data === 'd') {
    connection.write('Move: right')
  };
  if (data === 'e') {
    connection.write('Say: YOO')
  }
  if (data === 'r') {
    connection.write('Say: HAHA')
  }
};

module.exports = { setupInput };