//instaimage-server/routers/images.js

const { Router } = require("express");
const { Image, User } = require("../models");
const auth = require("../middleware/auth");

const router = new Router();
//attributes:{ exclude: ["email", "password"]} if you only want to exclude one or two items
router.get("/image", (req, res, next) => {
  console.log("GET ALL IMAGES");
  Image.findAll({
    include: [{ model: User, attributes: ["username"] }]
  })
    .then(images => res.status(200).send(images))
    .catch(next);
});

//post an image
router.post("/image", auth, (req, res, next) => {
  Image.create(
    { ...req.body, userId: req.userId }
    //{ include: [{ model: User, attributes: ["username"] }] }
  )
    .then(image => {
      image
        .reload({ include: [{ model: User, attributes: ["username"] }] })
        .then(image => {
          console.log("image after posting is", image);
          res.status(200).send(image);
        });
    })
    .catch(next);
});

//get images from a specific user
router.get("/image/:userId", (req, res, next) => {
  console.log("Get images of a specific user", req.params);

  Image.findAll({
    where: {
      userId: req.params.userId
    },
    include: [{ model: User, attributes: ["username"] }]
  })
    .then(images => {
      res.status(200).send(images);
    })
    .catch(next);
});

//delete an image
router.delete("/image", auth, async (req, res, next) => {
  try {
    const imageDelete = await Image.destroy({
      where: {
        id: req.body.imageId,
        userId: req.userId
      }
    });
    res.status(200).send(imageDelete);
  } catch {
    console.error;
  }
});

module.exports = router;
