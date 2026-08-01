import express from 'express'
import { pool } from '../config/db'
import { authenticate, authorize } from '../middleware/authMiddleware'

const router = express.Router()

router.get('/', async (_req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM speakers ORDER BY created_at DESC')
    res.json(rows)
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch speakers', error })
  }
})

router.post('/', authenticate, authorize('admin'), async (req, res) => {
  try {
    const { name, role, company, bio, image_url } = req.body
    const [result] = await pool.query(
      'INSERT INTO speakers (name, role, company, bio, image_url) VALUES (?, ?, ?, ?, ?)',
      [name, role, company, bio, image_url]
    ) as any
    res.status(201).json({ id: result.insertId, message: 'Speaker created' })
  } catch (error) {
    res.status(500).json({ message: 'Failed to create speaker', error })
  }
})

router.put('/:id', authenticate, authorize('admin'), async (req, res) => {
  try {
    const { id } = req.params
    const { name, role, company, bio, image_url } = req.body
    await pool.query('UPDATE speakers SET name = ?, role = ?, company = ?, bio = ?, image_url = ? WHERE id = ?', [name, role, company, bio, image_url, id])
    res.json({ message: 'Speaker updated' })
  } catch (error) {
    res.status(500).json({ message: 'Failed to update speaker', error })
  }
})

router.delete('/:id', authenticate, authorize('admin'), async (req, res) => {
  try {
    const { id } = req.params
    await pool.query('DELETE FROM speakers WHERE id = ?', [id])
    res.json({ message: 'Speaker deleted' })
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete speaker', error })
  }
})

export default router
