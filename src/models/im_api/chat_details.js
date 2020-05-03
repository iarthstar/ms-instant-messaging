module.exports = (Sequelize, Datatypes) => (
  Sequelize.define("chat_details", {
    id: {
      type: Datatypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    user_one: {
      type: Datatypes.UUID,
      allowNull: false
    },
    user_two: {
      type: Datatypes.UUID,
      allowNull: false
    }
  }, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  })
);