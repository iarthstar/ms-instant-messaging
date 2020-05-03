const uuid = require('uuid')['v4'];
const { Op } = require('sequelize');
const { get } = require('lodash');
const { METHOD, POST, GET, PUT, PATCH, DELETE } = require('../../constants');
const G = require('../../../globals');

const user = async (method, req, res) => {

  const {
    user_details
  } = G.SEQUELIZE.models;

  switch (method) {

    case METHOD[POST]: {

      const { body: { username, phone } } = req;

      return {
        success: true,
        data: await user_details.create({ id: uuid(), username, phone })
      }
    }; break;




    case METHOD[GET]: {
      const id = get(req.query, 'id') || get(req.params, 'id') || null;
      if (!Boolean(id)) throw 'ID missing';

      return {
        success: true,
        data: await user_details.findByPk(id)
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
        data: await user_details.destroy({ where: { id } })
      };
    } break;





    default: return ({});
  };
};

module.exports = {
  user
};