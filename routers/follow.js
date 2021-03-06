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
    .findOne({
      where: {
        FollowerId: req.userId,
        FollowedId: req.params.followingId
      }
    })
    .then(following => {
      if (following) {
        console.log("following is", following);
        res.status(400).json("You are already following this user");
      } else {
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
      }
    });

  /*res.send({
      message: "success"
    });*/
});

module.exports = router;
