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
      as: "Follower",
      through: "followRelations",
      foreignKey: "FollowerId",
      sourceKey: "id"
    });
    User.belongsToMany(User, {
      as: "Followed",
      through: "followRelations",
      foreignKey: "FollowedId",
      sourceKey: "id"
    });
  };
  return User;
};
