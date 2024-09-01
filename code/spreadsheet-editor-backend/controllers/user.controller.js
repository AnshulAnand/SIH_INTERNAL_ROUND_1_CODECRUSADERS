const asyncHandler = require('express-async-handler')
const UserModel = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports.signin = asyncHandler(async (req, res) => {
  console.log(req.body)

  const { email, password } = req.body

  console.log(email, password)

  if (!password || !email) {
    res.status(400).json({ message: 'All fields are required' })
    return
  }

  const duplicateEmail = await UserModel.findOne({ email }).lean()

  if (duplicateEmail) {
    res.status(409).json({ message: 'Email already exists' })
    return
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const userObject = { email, password: hashedPassword }

  const newUser = await UserModel.create(userObject)

  const JWT = jwt.sign({ userId: newUser._id }, process.env.JWTSECRET, {
    expiresIn: process.env.JWTTTL,
  })

  if (!newUser) {
    res
      .status(400)
      .json({ message: 'Invalid user data received, could not create user' })
    return
  }

  res
    .cookie('jwt', JWT, {
      httpOnly: true,
      sameSite: 'none',
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    })
    .json({ message: 'Registered Successfully' })
})

module.exports.getUser = asyncHandler(async (req, res) => {
  const { userId } = req.user
  const founderUSer = await UserModel.findById(userId)
  res.send({ message: founderUSer })
})

module.exports.userPermissions = asyncHandler(async (req, res) => {
  const { userId } = req.user
  const founderUSer = await UserModel.findById(userId)
  if (!founderUSer) {
    res.status(401).send({ message: 'Unauthrized' })
    return
  }
  console.log(req.body)
  founderUSer.permissions = req.body.permissions || false
  await founderUSer.save()
  res.send({ message: 'Permission changed' })
})
