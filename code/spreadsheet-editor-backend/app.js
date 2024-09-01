require('dotenv').config()
const express = require('express')
const app = express()
var cors = require('cors')
const connectDB = require('./utils/connectDB')
const cookieParser = require('cookie-parser')

connectDB()
const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true, //access-control-allow-credentials: true
  optionSuccessStatus: 200,
}
app.use(cors(corsOptions))
app.use(cookieParser())
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', require('./routes/user.routes'))
app.use('/', require('./routes/files.routes'))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
