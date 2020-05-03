const { Op } = require('sequelize');
const { get } = require('lodash');
const { METHOD, GET } = require('../../constants');
const G = require('../../../globals');

const chats = async (method, req, res) => {

  const {
    chat_details
  } = G.SEQUELIZE.models;

  switch (method) {


    case METHOD[GET]: {
      const id = get(req.query, 'id') || get(req.params, 'id') || null;
      if (!Boolean(id)) throw 'ID missing';

      const page = get(req.query, 'page') || get(req.params, 'page') || 0;
      const size = get(req.query, 'size') || get(req.params, 'size') || 10;

      return {
        success: true,
        data: await chat_details.findAll({
          where: {
            [Op.or]: [
              { user_one: id },
              { user_two: id }
            ]
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
  chats
};