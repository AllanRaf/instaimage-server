"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "dog1",
          email: "dog1",
          password: bcrypt.hashSync("dog", 10),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: "cat1",
          email: "cat1",
          password: bcrypt.hashSync("cat", 10),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: "duck",
          email: "duck",
          password: bcrypt.hashSync("duck", 10),
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
