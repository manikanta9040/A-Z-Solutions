import express from 'express'
import { pool } from '../config/db'
import { authenticate, authorize } from '../middleware/authMiddleware'

const router = express.Router()

router.get('/', async (_req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM news ORDER BY created_at DESC')
    res.json(rows)
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch news', error })
  }
})

router.post('/', authenticate, authorize('admin'), async (req, res) => {
  try {
    const { title, content, image_url } = req.body
    const [result] = await pool.query('INSERT INTO news (title, content, image_url) VALUES (?, ?, ?)', [title, content, image_url]) as any
    res.status(201).json({ id: result.insertId, message: 'News created' })
  } catch (error) {
    res.status(500).json({ message: 'Failed to create news', error })
  }
})

router.delete('/:id', authenticate, authorize('admin'), async (req, res) => {
  try {
    const { id } = req.params
    await pool.query('DELETE FROM news WHERE id = ?', [id])
    res.json({ message: 'News deleted' })
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete news', error })
  }
})

export default router
