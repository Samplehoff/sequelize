'use strict';
module.exports = (sequelize, DataTypes) => {
  const albumName = sequelize.define('albumName', {
    albumName: DataTypes.STRING,
    albumYear: DataTypes.STRING,
    artistId: DataTypes.STRING
  }, {});
  albumName.associate = function(models) {
    album.hasMany(models.songs, {
      as: 'albums',
      foreignKey: 'artist_id'
    })
    // associations can be defined here
  };
  return albumName;
};