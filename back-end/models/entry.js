const mongoose = require('mongoose')

const entrySchema = mongoose.Schema({
  hours: {type: Number, required: true},
  desc: {type: String, required: true},
  date: {type: Date, required: true},
  projectId: {type: String, required: true}
})

module.exports = mongoose.model('Entry', entrySchema)
