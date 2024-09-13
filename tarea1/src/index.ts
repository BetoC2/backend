import express from 'express'
import routes from './routes'

const PORT = process.env.port ?? 3000

const app = express()

app.use('/', routes)


app.listen(PORT, () => {
  console.log('Harcoded user in src/middlewares/roles.ts')
  console.log(`App running in http://localhost:${PORT}`)
})