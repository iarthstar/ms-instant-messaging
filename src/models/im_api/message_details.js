module.exports = (Sequelize, Datatypes) => (
  Sequelize.define("message_details", {
    id: {
      type: Datatypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    msg: {
      type: Datatypes.TEXT,
      allowNull: false
    },
    sent_by: {
      type: Datatypes.BOOLEAN,
      allowNull: false
    },
    chat_id: {
      type: Datatypes.UUID,
      allowNull: false
    }
  }, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  })
);