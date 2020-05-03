const utils = require('../utils');

const onClose = (code, reason) => {
  utils.log("Client disconnected:", code, reason);
};

exports.onConnection = (ws) => {
  utils.log("Client connected");
  ws.on("close", onClose);
};

exports.forEachClient = (client) => {
  client.send({ msg: "Hello World"});
};