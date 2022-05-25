const express = require('express')

// routes
const projectRouter = require('./routes/projects')
const landingRouter = require('./routes/landing')
const galleryRouter = require('./routes/gallery')
const pageRouter = require('./routes/pages')
const userRouter = require('./routes/user')
const portfolioRouter = require('./routes/portfolio')

const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.use('/projects', projectRouter);
app.use('/landing', landingRouter);
app.use('/gallery', galleryRouter)
app.use('/pages', pageRouter)
app.use('/user', userRouter)
app.use('/portfolio', portfolioRouter)

app.listen(4000, () => console.log('Server started on port 4000'))