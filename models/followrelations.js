"use strict";
module.exports = (sequelize, DataTypes) => {
  const followRelations = sequelize.define(
    "followRelations",
    {
      myFollowerId: DataTypes.INTEGER,
      imFollowingId: DataTypes.INTEGER
    },
    {}
  );
  followRelations.associate = function(models) {
    // associations can be defined here
    followRelations.belongsTo(models.User, {
      as: "follower",
      foreignKey: "myFollowerId"
    });
    followRelations.belongsTo(models.User, {
      as: "following",
      foreignKey: "imFollowingId"
    });
  };
  return followRelations;
};
