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

//delete an image
router.delete('/image', auth, async (req, res, next) =>{
    try{
        console.log('DELETING AN IMAGE', req.body.imageId, req.userId)
        const imageDelete = await Image.destroy({where:
            {
                id: req.body.imageId,
                UserId: req.userId
            }
        })
        console.log('deleted image is', imageDelete)
        res.sendStatus(200).send(imageDelete)
    }
    catch{
        console.error
    }
})

module.exports = router