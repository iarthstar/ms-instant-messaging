const G = require('../globals');
const { sequelize } = require('../config');


const sync = async () => {

  const PATH = "../models";

  //
  // ─────────────────────────────────────────────────────────── MODELS ───────
  //

  const models = {
    "im_api": [
      "user_details",
      "chat_details",
      "message_details"
    ],
  };

  //
  // ──────────────────────────────────────────────────────────────────────────
  //




  //
  // ────────────────────────────────────────────────────────── SYNCING ───────
  //

  for (service in models)
    for (route of models[service])
      await G.SEQUELIZE.import(`${PATH}/${service}/${route}`).sync(sequelize.sync);

  //
  // ──────────────────────────────────────────────────────────────────────────
  //

};

module.exports = {
  sync
};