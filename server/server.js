// import * as path from 'path'
// import { fileURLToPath } from 'url'

const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const PORT = process.env.PORT || 4000

// route controllers
const rosterRouter = require('./routes/rosterRouter')

// importing database
const connectDB = require('./db/connectDB')

// initializing express
const app = express()

// cors
app.use(cors())

// middleware
app.use(express.json())

// routes
app.use('/api/v1/roster', rosterRouter)
console.log(process.env.NODE_ENV)
console.log(process.env.MONGO_URI)
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)

    app.listen(process.env.PORT, () => {
      console.log(`server running on port ${PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()

// serve frontend
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')))

//   app.get('*', (req, res) =>
//     res.sendFile(
//       path.resolve(__dirname, '../', 'client', 'build', 'index.html')
//     )
//   )
// } else {
//   app.get('/', (req, res) => res.send('Please set to production!'))
// }
