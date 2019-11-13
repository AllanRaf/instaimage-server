//instaimage-server/routers/images.js

const { Router } = require('express')
const { Image, User } = require('../models')
const auth = require('../middleware/auth')

const router = new Router()
//attributes:{ exclude: ["email", "password"]} if you only want to exclude one or two items
router.get('/image', (req, res, next) => {
    console.log('GET ALL IMAGES')
    Image.findAll({
        include: [
           { model: User, attributes:["username"] }
        ],
      })
    .then(images => res.status(200).send(images))
    .catch(next)
})

//post an image
router.post('/image',auth, (req, res, next) => {
    Image.create({...req.body,UserId: req.userId})
    .then(image => res.status(200).send(image))
    .catch(next)
})

module.exports = router