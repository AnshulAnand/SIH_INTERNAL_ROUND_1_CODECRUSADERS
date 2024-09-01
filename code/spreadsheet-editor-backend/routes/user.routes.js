const express = require('express')
const router = express.Router()
const verifyJwt = require('../middlewares/verifyJwt')
const serializeUser = require('../middlewares/serializeUser')
const {
  signin,
  getUser,
  userPermissions,
} = require('../controllers/user.controller')

router
  .post('/users/signin', signin)
  .get('/users', verifyJwt, getUser)
  .post('/users/permissions', verifyJwt, userPermissions)

module.exports = router
