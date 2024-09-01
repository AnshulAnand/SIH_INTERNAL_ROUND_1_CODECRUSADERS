const jwt = require('jsonwebtoken')

const verifyJwt = async (req, res, next) => {
  const cookies = req.cookies

  console.log(cookies)

  if (!cookies?.jwt) {
    res.status(401).send({ message: 'Unauthorized' })
    return
  }

  const JWT = cookies.jwt

  console.log(JWT)

  jwt.verify(JWT, process.env.JWTSECRET, (err, decoded) => {
    if (err) {
      console.log({ err })
      res.status(403).send({ message: 'Unauthorized' })
      return
    }
    req.user = decoded
    next()
  })
}

module.exports = verifyJwt
