"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "dog",
          email: "dog",
          password: bcrypt("dog"),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: "cat",
          email: "cat",
          password: "cat",
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
