const mongoose = require('mongoose')

const fileSchema = mongoose.Schema(
  {
    data: { type: Object },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: { type: String, required: true },
  },
  { timestamps: true }
)

const FileModel = mongoose.model('File', fileSchema)

module.exports = FileModel
