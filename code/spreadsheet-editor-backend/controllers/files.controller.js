const asyncHandler = require('express-async-handler')
const UserModel = require('../models/user.model')
const FileModel = require('../models/file.model')

const io = require('socket.io')(3001, {
  cors: { origin: ['http://localhost:5173'] },
})

io.on('connection', socket => {
  console.log(socket.id)
  socket.on('update-file', async message => {
    console.log({ id: message })
    const user = await UserModel.findById(message)
    if (user.permissions) {
      socket.broadcast.emit('take-action', message)
    } else {
      socket.broadcast.emit('unauthorized', {
        message:
          'Ask permission to edit this from owner or edit permissions in the dashboard if you are the owner',
        id: user._id,
      })
    }
  })
})

module.exports.getFile = asyncHandler(async (req, res) => {
  const id = req.params.id
  console.log(id)
  const foundFile = await FileModel.findById(id)
  console.log(foundFile)
  res.send(foundFile.data)
})

module.exports.createFile = asyncHandler(async (req, res) => {
  const { userId } = req.user
  const file = await FileModel.create({ data: {}, userId, name: req.body.name })
  res.send(file._id)
})

module.exports.getAllFiles = asyncHandler(async (req, res) => {
  const { userId } = req.user
  const files = await FileModel.find({ userId: userId })
  console.log(files)
  res.send(files)
})

module.exports.saveFile = asyncHandler(
  asyncHandler(async (req, res) => {
    const { id, data } = req.body

    console.log(req.body)

    const file = await FileModel.findById(id)

    // const file = await FileModel.create({
    //   data: JSON.parse(data),
    //   userId: req.user.userId,
    // })

    file.data = JSON.parse(data)
    await file.save()

    res.send({ message: 'File saved' })
  })
)
