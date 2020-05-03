const G = require('./../globals');
const events = require('./events');

module.exports = async () => {

  await G.WEBSOCKETS.on("connection", events.onConnection);
  
  // setInterval(() => {
  //   G.WEBSOCKETS.clients.forEach(events.forEachClient);
  // }, 1000);

};