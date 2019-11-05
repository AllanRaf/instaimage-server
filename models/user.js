'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      email: {
        type: DataTypes.STRING,
        unique: true
      },
      password: DataTypes.STRING
    }
  );
  /*User.associate = function(models) {
    // associations can be defined here
    models.User.hasMany(models.Post, {
      foreignKey: "userId"
    });
  };*/
  return User;
};