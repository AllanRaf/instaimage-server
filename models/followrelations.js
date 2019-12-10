"use strict";
module.exports = (sequelize, DataTypes) => {
  const followRelations = sequelize.define(
    "followRelations",
    {
      FollowerId: DataTypes.INTEGER,
      FollowingId: DataTypes.INTEGER
    },
    {}
  );
  followRelations.associate = function(models) {
    // associations can be defined here
  };
  return followRelations;
};
