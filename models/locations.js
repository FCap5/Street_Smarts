module.exports = (sequelize, DataTypes) => {
  const Locations = sequelize.define('Locations', {
    latitude: {
      type: DataTypes.DECIMAL(10, 8),
      allowNull: false,
    },
    longitude: {
      type: DataTypes.DECIMAL(11, 8),
      allowNull: false,
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  Locations.associate = (models) => {
    Locations.belongsToMany(models.Locations, {
      through: 'OrderLocations',
      as: 'locations',
      foreignKey: 'orderId',
      otherKey: 'locationId',
    });
  };
  return Locations;
};
