'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    models.Image.belongsTo(models.User,{
      foreignKey: "userId"
    })
  };
  console.log('User is', User)
  return User;
};