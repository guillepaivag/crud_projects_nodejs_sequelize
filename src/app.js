import express from 'express'
import routerProjects from './routes/projects.routes.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/v1/projects', routerProjects)

export default app