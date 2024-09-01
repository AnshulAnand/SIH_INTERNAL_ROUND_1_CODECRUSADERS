const jwt = require('jsonwebtoken')

const serializeUser = async (req, res, next) => {
  const cookies = req.cookies

  if (!cookies?.jwt) {
    req.user = {}
    next()
    return
  }

  const JWT = cookies.jwt

  jwt.verify(JWT, process.env.JWTSECRET, (err, decoded) => {
    if (err) {
      console.log({ err })
      req.user = {}
      next()
      return
    }
    req.user = decoded
    next()
  })
}

module.exports = serializeUser
