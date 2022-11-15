const express = require('express')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const db = require('./keys'); // I keep my key in a separate file in the way shown in the video
const app = express()

const Entry = require('./models/entry')

db // MongoDB connection

app.use(bodyparser.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-headers', 'Origin, X-Requested-With, Content-type, Accept')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS')
  next()
})

app.post('/api/entries', (req, res, next) => {

  const entries = new Entry({
    hours: req.body.hours,
    desc: req.body.desc
  })
  entries.save().then(createdEntry => {
    res.status(201).json({
      message: 'new entry was made',
      entryId: createdEntry._id
    })
  })
})

app.get('/api/entries', (req, res, next) => {
  Entry.find().then(documents => {
    res.status(200).json({
      message: 'entries send',
      entries: documents
    })
  })
})


app.delete('/api/entries/:id', (req, res, next) => {
  Entry.deleteOne({_id: req.params.id}).then((result) => {
  })
  res.status(200).json({message: 'Entry removed'})
})

module.exports = app
