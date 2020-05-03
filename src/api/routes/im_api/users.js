const { Op } = require('sequelize');
const { get } = require('lodash');
const { METHOD, GET } = require('../../constants');
const G = require('../../../globals');

const users = async (method, req, res) => {

  const {
    user_details
  } = G.SEQUELIZE.models;

  switch (method) {


    case METHOD[GET]: {
      const username = get(req.query, 'username') || get(req.params, 'username') || null;
      if (!Boolean(username)) throw 'Username missing';

      const page = get(req.query, 'page') || get(req.params, 'page') || 0;
      const size = get(req.query, 'size') || get(req.params, 'size') || 10;

      return {
        success: true,
        data: await user_details.findAll({
          where: {
            username: {
              [Op.substring]: username
            }
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
  users
};