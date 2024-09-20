import express  from 'express'
import cors from 'cors'
import {addTask, removeTask, updateTask, mergeTaskLists} from './task.js';
import { connectToMongo, findAllTasks, postTask } from './mongo.mjs';

const app = express()
const port = 3000
app.use(cors())
app.use(express.json())
const collection = await connectToMongo("Data", "Data")

app.get('/task', async (req, res) => {
  try {
    const tasks = await findAllTasks(collection)
    res.json(tasks)
  } catch (error) {
    console.error('Error fetching tasks:', error)
    res.status(500).json({ error: 'An error occurred while fetching tasks' })
  }
})

app.post('/post-task', async (req, res) => {
  let name = req.body.name
  let description = req.body.description
  let creator = req.body.creator
  const task = {
    name: name,
    description: description,
    creator: creator
  }
  await postTask(collection, task)
  res.json({"message" : "ok"})
})

app.get('/', (req, res) => {
    console.log('eeee')
  res.send('Hello World!')
})

var tasks = []

app.post('/new', (req, res) => {
    let id = req.body.id
    console.log(req.body)
    let nom = req.body.nom
    let description = req.body.description
    let creator = req.body.creator

    tasks = addTask(tasks, id, nom, description, creator)
    res.json({"message" : "ok"})
})

app.delete('/delete', (req, res) => {
    let id = req.body.id
    removeTask(tasks, id)
    res.json({"message" : "delete ok"})
})

app.put('/update', (req, res) => {
  console.log(req.body)
  let id = req.body.id
  let nom = req.body.nom
  let description = req.body.description
  let creator = req.body.creator
  let iTask = req.body.iTask
  updateTask(tasks, iTask, id, nom, description, creator)
  res.json({"message" : "update ok"})
})

app.delete('/merge', (req, res) => {
  mergeTaskLists(tasks)
  res.json({"message" : "merge ok"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})