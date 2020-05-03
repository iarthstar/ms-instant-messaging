const uuid = require('uuid')['v4'];
const { Op } = require('sequelize');
const { get } = require('lodash');
const { METHOD, POST, GET, PUT, PATCH, DELETE } = require('../../constants');
const G = require('../../../globals');

const message = async (method, req, res) => {

  const {
    message_details
  } = G.SEQUELIZE.models;

  switch (method) {

    case METHOD[POST]: {

      const { sent_by, msg, chat_id } = req.body;

      return {
        success: true,
        data: await message_details.create({ id: uuid(), sent_by, msg, chat_id })
      }
    }; break;




    case METHOD[GET]: {
      const id = get(req.query, 'id') || get(req.params, 'id') || null;
      if (!Boolean(id)) throw 'ID missing';

      return {
        success: true,
        data: await message_details.findByPk(id)
      };
    } break;




    case METHOD[PUT]: {

      return {
        success: true,
        data: {}
      }
    }; break;




    case METHOD[DELETE]: {
      const id = get(req.query, 'id') || get(req.params, 'id') || null;
      if (!Boolean(id)) throw 'ID missing';

      return {
        success: true,
        data: await message_details.destroy({ where: { id } })
      };
    } break;





    default: return ({});
  };
};

module.exports = {
  message
};