/**
 * @file websockets.js
 * @description websocket js configuration
 * 
 * @author Arth Gajjar <iarthstar@gmail.com>
 */



// modules import
const WebSocket = require('ws');

const G = require('./../globals');
const sockets = require('./../sockets');


module.exports = async () => {
  G.WEBSOCKETS = new WebSocket.Server({ server: G.EXPRESS });

  await sockets();

};