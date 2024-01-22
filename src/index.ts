import express from 'express'
import userRoutes from './routes/user.routes'

const app = express()
const port = 3000

app.use('/users', userRoutes)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
