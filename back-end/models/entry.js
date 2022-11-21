const mongoose = require('mongoose')

const entrySchema = mongoose.Schema({
  hours: {type: Number, required: true},
  desc: {type: String, required: true},
  date: {type: Date, required: true}
})

module.exports = mongoose.model('Entry', entrySchema)
