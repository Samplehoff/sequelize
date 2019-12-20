'use strict';
module.exports = (sequelize, DataTypes) => {
  const songs = sequelize.define('songs', {
    name: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    album_id: DataTypes.INTEGER,
    year: DataTypes.INTEGER
  }, {});
  songs.associate = function(models) {
    
    // associations can be defined here
  };
  return songs;
};