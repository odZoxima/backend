import express from "express"
import bodyParser from "body-parser"
import usersRoutes from "./routes/users.js"

const app = express()

app.use(bodyParser.json())

app.use('/users', usersRoutes)

app.set('port', process.env.PORT || 5432)

app.get('/', (req, res) => {
  res.send('New Backend structure')
})

app.listen(process.env.PORT, () => {
  console.log(`New Backend Strucure listening at http://localhost:${process.env.PORT}`)
})