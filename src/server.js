const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config()

const { MONGO_USER, MONGO_PASS, MONGO_HOST, MONGO_PORT, MONGO_NAME } = process.env

mongoose.connect(
  `mongodb://${MONGO_USER}:${MONGO_PASS}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_NAME}?authSource=admin`,
  {
		useNewUrlParser: true,
		useUnifiedTopology: true, 
		useCreateIndex: true,
		useFindAndModify: false
  }
)

mongoose.connection.on('error', () => console.error('Connection Error:'))
mongoose.connection.once('open', () => console.log('MongoDB Connected'))

const userRoute = require('./routes/user')

const app = express()
const port = process.env.NODE_PORT || 4000

app.get('/', (request, response) => {
	return response.sendStatus(200)
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/user', userRoute)

app.listen(port, () => {
	console.log(`http://localhost:${port}`)
})
