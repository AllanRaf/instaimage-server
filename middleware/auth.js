//instaimage-server/middleware/auth.js

const { User } = require('../models')
const { toData } = require('../util/jwt')

function auth(req, res, next) {
  const auth = req.headers.authorization && req.headers.authorization.split(' ')
  console.log('AUTH MIDDLEWARE', auth)
  console.log('IS IT TRUE', auth && auth[0] === 'Bearer' && auth[1])
  if (auth && auth[0] === 'Bearer' && auth[1]) {
    console.log('IT IS TRUE', toData(auth[1]))
    try {
      const data = toData(auth[1])
      console.log('data ', data, 'User model is', User)
      User
        .findByPk(data.userId)
        .then(user => {
          if (!user) return next('User does not exist')
          req.user = user
          req.userId = data.userId  //added this line to try and add userId column to images
          next()
        })
        .catch(next)
    }
    catch(error) {
      res.status(400).send({
        message: `Error ${error.name}: ${error.message}`,
      })
    }
  }
  else {
    res.status(401).send({
      message: 'Please supply some valid credentials'
    })
  }
}

module.exports = auth