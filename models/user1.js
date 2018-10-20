'use strict';
module.exports = (sequelize, DataTypes) => {
  const user1 = sequelize.define('user1', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {});
  user1.associate = function(models) {
    // associations can be defined here
  };
  return user1;
};