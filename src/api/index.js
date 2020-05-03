/**
 * @file api/index.js
 * @description all the exposed routes are here
 * 
 * @author Arth Gajjar <iarthstar@gmail.com>
 */




// modules import
const { Router } = require('express');
const G = require('./../globals');

const { MIDDLE___, POST_____, GET______, PUT______, PATCH____, DELETE___ } = require('./utils');

const middleware = require('./middlewares');

const req_res = require('./routes/req_res');
const im_api = require('./routes/im_api');

module.exports = () => {

  G.ROUTE = Router();

  //
  // ─────────────────────────────────────────────────────────── ROUTES ───────
  //

  /*------------------- REQRES APIs -------------------*/

  // ReqRes CRUD
  MIDDLE___`/req_res/users                              ${middleware.basicAuth}`
  POST_____`/req_res/users                              ${req_res.users}`
  GET______`/req_res/users/:id                          ${req_res.users}`
  PUT______`/req_res/users/:id                          ${req_res.users}`
  DELETE___`/req_res/users/:id                          ${req_res.users}`



  /*------------- INSTANT MESSAGING APIs --------------*/

  // User CRUD
  POST_____`/im_api/user                        ${im_api.user}`
  GET______`/im_api/user                        ${im_api.user}`
  GET______`/im_api/user/:id                    ${im_api.user}`
  PUT______`/im_api/user                        ${im_api.user}`
  PUT______`/im_api/user/:id                    ${im_api.user}`
  DELETE___`/im_api/user                        ${im_api.user}`
  DELETE___`/im_api/user/:id                    ${im_api.user}`
  
  // Users
  GET______`/im_api/users                       ${im_api.users}`

  // Chat CRUD
  POST_____`/im_api/chat                        ${im_api.chat}`
  GET______`/im_api/chat                        ${im_api.chat}`
  GET______`/im_api/chat/:id                    ${im_api.chat}`
  PUT______`/im_api/chat                        ${im_api.chat}`
  PUT______`/im_api/chat/:id                    ${im_api.chat}`
  DELETE___`/im_api/chat                        ${im_api.chat}`
  DELETE___`/im_api/chat/:id                    ${im_api.chat}`
  
  // Chats
  GET______`/im_api/chats                       ${im_api.chats}`

  // Message CRUD
  POST_____`/im_api/message                        ${im_api.message}`
  GET______`/im_api/message                        ${im_api.message}`
  GET______`/im_api/message/:id                    ${im_api.message}`
  PUT______`/im_api/message                        ${im_api.message}`
  PUT______`/im_api/message/:id                    ${im_api.message}`
  DELETE___`/im_api/message                        ${im_api.message}`
  DELETE___`/im_api/message/:id                    ${im_api.message}`
  
  // Messages
  GET______`/im_api/messages                       ${im_api.messages}`


  //
  // ──────────────────────────────────────────────────────────────────────────
  //


  return G.ROUTE;
};