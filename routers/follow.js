//instaimage-server/routers/follow.js
const { Router } = require("express");
const { followRelations, User } = require("../models");
const auth = require("../middleware/auth");

const router = new Router();

router.post("/follow/:followerId", (req, res, next) => {
  console.log("YOU HAVE REACHED THE FOLLOW END POINT", req.params.followerId);
  /*res.send({
      message: "success"
    });*/
});

module.exports = router;
