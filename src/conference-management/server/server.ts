import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import authRoutes from './routes/authRoutes'
import conferenceRoutes from './routes/conferenceRoutes'
import speakerRoutes from './routes/speakerRoutes'
import registrationRoutes from './routes/registrationRoutes'
import newsRoutes from './routes/newsRoutes'
import testimonialRoutes from './routes/testimonialRoutes'
import contactRoutes from './routes/contactRoutes'
import categoryRoutes from './routes/categoryRoutes'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use('/uploads', express.static('uploads'))

app.use('/api/auth', authRoutes)
app.use('/api/conferences', conferenceRoutes)
app.use('/api/speakers', speakerRoutes)
app.use('/api/registrations', registrationRoutes)
app.use('/api/news', newsRoutes)
app.use('/api/testimonials', testimonialRoutes)
app.use('/api/contacts', contactRoutes)
app.use('/api/categories', categoryRoutes)

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', message: 'Conference management API is running' })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
