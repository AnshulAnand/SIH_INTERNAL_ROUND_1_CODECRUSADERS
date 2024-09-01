const express = require('express')
const router = express.Router()
const verifyJwt = require('../middlewares/verifyJwt')
const {
  getFile,
  saveFile,
  createFile,
  getAllFiles,
} = require('../controllers/files.controller')

router
  .post('/files', verifyJwt, saveFile)
  .post('/files/create', verifyJwt, createFile)
  .get('/files/all', verifyJwt, getAllFiles)
  .get('/files/:id', getFile)
module.exports = router
