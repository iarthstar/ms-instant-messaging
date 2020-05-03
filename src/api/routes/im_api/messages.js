const { Op } = require('sequelize');
const { get } = require('lodash');
const { METHOD, GET } = require('../../constants');
const G = require('../../../globals');

const messages = async (method, req, res) => {

  const {
    message_details
  } = G.SEQUELIZE.models;

  switch (method) {


    case METHOD[GET]: {
      const id = get(req.query, 'id') || get(req.params, 'id') || null;
      if (!Boolean(id)) throw 'ID missing';

      const page = get(req.query, 'page') || get(req.params, 'page') || 0;
      const size = get(req.query, 'size') || get(req.params, 'size') || 10;

      return {
        success: true,
        data: await message_details.findAll({
          where: {
            chat_id: id
          },
          offset: page,
          limit: size
        })
      };
    } break;



    default: return ({});
  };
};

module.exports = {
  messages
};