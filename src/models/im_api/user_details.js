module.exports = (Sequelize, Datatypes) => (
  Sequelize.define('user_details', {
    id: {
      type: Datatypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    username: {
      type: Datatypes.STRING,
      allowNull: false
    },
    phone: {
      type: Datatypes.STRING(15),
      allowNull: false
    }
  }, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  })
);