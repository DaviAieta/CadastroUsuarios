import express from 'express'
import userRoutes from './routes/user.routes'
import configApp from './config'

const app = express()
configApp(app)

// Rotas user
app.use('/users', userRoutes)

const PORT = 3000
app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`)
})
