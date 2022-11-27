const express = require('express')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const db = require('./keys'); // MongoDB connection key
const app = express()

const Entry = require('./models/entry')
const Project = require('./models/project')

db // MongoDB connection

app.use(bodyparser.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-headers', 'Origin, X-Requested-With, Content-type, Accept')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS, PUT')
  next()
})



app.post('/api/entries', (req, res, next) => {

  const entries = new Entry({
    hours: req.body.hours,
    desc: req.body.desc,
    date: req.body.date,
    projectId: req.body.projectId
  })
  entries.save().then(createdEntry => {
    console.log(createdEntry)
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

app.patch('/api/entries/:id', async (req, res, next) => {
    const hours = req.body.hours
    const desc = req.body.desc
    await Entry.findByIdAndUpdate(req.body.listId, {desc, hours}, {new: true}).then(
      (changes) => {
        res.status(200).json({
          hours: changes.hours,
          desc: changes.desc,
          id: req.body.listId,

        })
      }
    )
  }
)


app.post('/api/projects', (req, res, next) => {

  const projects = new Project({
    name: req.body.name,
    maxHour: req.body.maxHour
  })
  projects.save().then(createdProject => {
    console.log(createdProject)
    res.status(201).json({
      message: 'new project was made'
    })
  })
})

app.get('/api/projects', (req, res, next) => {
  Project.find().then(documents => {
    res.status(200).json({
      message: 'entries send',
      project: documents
    })
  })
})

module.exports = app
