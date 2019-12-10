"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("followRelations", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      FollowerId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Users"
          },
          key: "id"
        }
      },
      FollowedId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Users"
          },
          key: "id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("followRelations");
  }
};
