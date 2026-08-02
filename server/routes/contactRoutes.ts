import express from 'express'
import { pool } from '../config/db'

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body
    await pool.query('INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)', [name, email, subject, message])
    res.status(201).json({ message: 'Contact submitted' })
  } catch (error) {
    res.status(500).json({ message: 'Failed to submit contact form', error })
  }
})

export default router
