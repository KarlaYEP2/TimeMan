const mongoose = require('mongoose')

const projectSchema = mongoose.Schema({
  name: {type:String , required: true, unique: true},
  maxHour: {type:Number , required: true},
})

module.exports = mongoose.model('Project', projectSchema)
