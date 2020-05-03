const uuid = require('uuid')["v4"];
const { Op } = require('sequelize');
const { get } = require('lodash');
const { METHOD, POST, GET, PUT, PATCH, DELETE } = require('../../constants');
const G = require('../../../globals');

const chat = async (method, req, res) => {

  const {
    chat_details
  } = G.SEQUELIZE.models;

  switch (method) {

    case METHOD[POST]: {
      const user_one = get(req.body, 'user_one');
      const user_two = get(req.body, 'user_two');

      if (!user_one || !user_two) throw 'User missing...';

      const data = await chat_details.findOrCreate({
        where: {
          [Op.or]: [
            { user_one: user_one, user_two: user_two },
            { user_one: user_two, user_two: user_one }
          ]
        },
        defaults: {
          id: uuid(),
          user_one,
          user_two
        }
      });
      return {
        success: true,
        data: data[0]
      }
    }; break;




    case METHOD[GET]: {

      return {
        success: true,
        data: {}
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
        data: await chat_details.destroy({ where: { id } })
      };
    } break;





    default: return ({});
  };
};

module.exports = {
  chat
};