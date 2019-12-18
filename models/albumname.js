'use strict';
module.exports = (sequelize, DataTypes) => {
  const albumName = sequelize.define('albumName', {
    albumName: DataTypes.STRING,
    albumYear: DataTypes.STRING,
    artistId: DataTypes.STRING
  }, {});
  albumName.associate = function(models) {
    // associations can be defined here
  };
  return albumName;
};