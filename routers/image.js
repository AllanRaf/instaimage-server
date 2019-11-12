//instaimage-server/routers/images.js

const { Router } = require('express')
const { Image } = require('../models')
const auth = require('../middleware/auth')

const router = new Router()

router.get('/image', (req, res, next) => {
    Image.findAll()
    .then(images => res.status(200).send(images))
    .catch(next)
})

//post an image
router.post('/image',auth, (req, res, next) => {
    console.log('POST AN IMAGE REQ IS', req.body, req.userId)
    Image.create({userId: req.userId, ...req.body})
    .then(image => res.status(200).send(image))
    .catch(next)
})

module.exports = router