import express from 'express'
import userRoutes from './routes/user.routes'
import * as exphbs from 'express-handlebars'
import path from 'path'

const app = express()
const port = 3000

const handlebars = exphbs.create({
  defaultLayout: 'main',
})

app.engine('handlebars', handlebars.engine)
app.set('view engine', 'handlebars')

// const caminho_view = path.join(__dirname, '/views')
// console.log(caminho_view)
app.set('views', path.join(__dirname, '/views'))

app.use('/users', userRoutes)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
