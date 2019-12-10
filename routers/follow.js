//instaimage-server/routers/follow.js
const { Router } = require("express");
const { followRelations, User } = require("../models");
const auth = require("../middleware/auth");

const router = new Router();

router.post("/follow/:followingId", auth, (req, res, next) => {
  console.log(
    "YOU HAVE REACHED THE FOLLOW END POINT",
    req.params.followingId,
    "userId",
    req.userId,
    "followRelations",
    followRelations
  );

  followRelations
    .create({
      FollowerId: req.userId,
      FollowedId: req.params.followingId
    })
    .then(followRelation => {
      console.log("followRelation is", followRelation);
      res.status(201).json(followRelation);
    })
    .catch(next);
  /*res.send({
      message: "success"
    });*/
});

module.exports = router;
