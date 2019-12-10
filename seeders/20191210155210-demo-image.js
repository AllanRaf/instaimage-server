"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Images",
      [
        {
          title: "cat",
          url:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/grumpy-cat-appears-on-nbc-news-today-show-news-photo-459583554-1558094298.jpg?crop=0.63644xw:1xh;center,top&resize=640:*",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "dog",
          url:
            "https://static.scientificamerican.com/blogs/cache/file/BB6F1FE0-4FDE-4E6E-A986664CE30602E4_source.jpg?w=590&h=800&2F8476C1-DF14-49BA-84FFE94218CC4933",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "duck",
          url:
            "http://upload.wikimedia.org/wikipedia/commons/3/3f/Amerikanische_Pekingenten_2013_01%2C_cropped.jpg",
          userId: 3,
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
