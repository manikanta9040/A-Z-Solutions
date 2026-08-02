import express from 'express'
import { pool } from '../config/db'
import { authenticate, authorize } from '../middleware/authMiddleware'

const router = express.Router()

router.get('/', async (_req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM testimonials ORDER BY created_at DESC')
    res.json(rows)
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch testimonials', error })
  }
})

router.post('/', authenticate, authorize('admin'), async (req, res) => {
  try {
    const { client_name, company, message } = req.body
    const [result] = await pool.query('INSERT INTO testimonials (client_name, company, message) VALUES (?, ?, ?)', [client_name, company, message]) as any
    res.status(201).json({ id: result.insertId, message: 'Testimonial created' })
  } catch (error) {
    res.status(500).json({ message: 'Failed to create testimonial', error })
  }
})

router.delete('/:id', authenticate, authorize('admin'), async (req, res) => {
  try {
    const { id } = req.params
    await pool.query('DELETE FROM testimonials WHERE id = ?', [id])
    res.json({ message: 'Testimonial deleted' })
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete testimonial', error })
  }
})

export default router
