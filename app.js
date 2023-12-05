import express from 'express'
import { config } from 'dotenv' // Load environment variables from .env file
export const app = express()
config({
  path: 'config/.env',
})
const apiKey = process.env.API_KEY

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index', { apiKey })
})
app.post('/submit', async (req, res) => {
  const place = req.body.place
  res.send(place)
})
