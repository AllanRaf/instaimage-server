"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING
    },
    {}
  );
  User.associate = function(models) {
    User.hasMany(models.Image, {
      foreignKey: "userId",
      sourceKey: "id"
    });
    User.belongsToMany(User, {
      as: "follower",
      through: "followRelations",
      foreignKey: "userId",
      as: "myFollowerId"
    });
    User.belongsToMany(User, {
      as: "following",
      through: "followRelations",
      foreignKey: "userId",
      as: "imFollowingId"
    });
  };
  return User;
};
