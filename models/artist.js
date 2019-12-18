'use strict';
module.exports = (sequelize, DataTypes) => {
  const artist = sequelize.define('artist', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {});
  artist.associate = function(models) {
    artist.hasMany(models.albumname, {
      as: 'albumname',
      foreignKey: 'artistId'
    })
  };
  return artist;
};