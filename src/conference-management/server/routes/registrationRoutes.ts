import express from 'express'
import { pool } from '../config/db'

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const { name, email, phone, organization, category, payment_option, message } = req.body
    await pool.query(
      'INSERT INTO registrations (name, email, phone, organization, category, payment_option, message) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [name, email, phone, organization, category, payment_option, message]
    )
    res.status(201).json({ message: 'Registration submitted' })
  } catch (error) {
    res.status(500).json({ message: 'Failed to submit registration', error })
  }
})

router.get('/', async (_req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM registrations ORDER BY created_at DESC')
    res.json(rows)
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch registrations', error })
  }
})

export default router
