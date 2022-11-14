const express = require('express')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

const Entry = require('./models/entry')

// mongoose.connect('mongodb+srv://test:<password>@cluster0.57yur.mongodb.net/?retryWrites=true&w=majority').then(() => {
//   console.log('Connected to DB')
// }).catch(() => {
//   console.log('Connection failed')
// })
app.use(bodyparser.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-headers', 'Origin, X-Requested-With, Content-type, Accept')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS')
  next()
})

app.post('/api/entries', (req,res,next) => {
  const entries = new Entry({
    hours: req.body.hours,
    desc: req.body.desc
  })
  console.log(entries)
  res.status(201).json({
    message: 'new entry was made'
  })
})

app.get('/api/entries', (req, res, next) => {
  const entries = [
    {id: '1', hours: 3, desc: 'test data'},
    {id: '2', hours: 2, desc: 'test'},
    {id: '3', hours: 5, desc: 'tester'}
  ]
  res.status(200).json({
    message: 'entries send',
    entries: entries
  })
})

module.exports = app
