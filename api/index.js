const express = require('express')
const dotenv = require('dotenv')

dotenv.config();

// routes
const projectRouter = require('./routes/projects')
const galleryRouter = require('./routes/gallery')
const userRouter = require('./routes/user')
const portfolioRouter = require('./routes/portfolio')

const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.use('/projects', projectRouter);
app.use('/gallery', galleryRouter)
app.use('/user', userRouter)
app.use('/portfolio', portfolioRouter)

app.listen(process.env.PORT || 4000, () => console.log(`Server started on port ${process.env.PORT || 4000}`))