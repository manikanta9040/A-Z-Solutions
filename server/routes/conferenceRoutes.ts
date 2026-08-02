import express from 'express'
import { pool } from '../config/db'
import { authenticate, authorize } from '../middleware/authMiddleware'

const router = express.Router()

router.get('/', async (_req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM conferences ORDER BY created_at DESC')
    res.json(rows)
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch conferences', error })
  }
})

router.post('/', authenticate, authorize('admin'), async (req, res) => {
  try {
    const { title, slug, category_id, date, location, description, featured, status } = req.body
    const [result] = await pool.query(
      'INSERT INTO conferences (title, slug, category_id, date, location, description, featured, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [title, slug, category_id, date, location, description, featured || false, status || 'draft']
    ) as any
    res.status(201).json({ id: result.insertId, message: 'Conference created' })
  } catch (error) {
    res.status(500).json({ message: 'Failed to create conference', error })
  }
})

router.put('/:id', authenticate, authorize('admin'), async (req, res) => {
  try {
    const { id } = req.params
    const { title, slug, category_id, date, location, description, featured, status } = req.body
    await pool.query(
      'UPDATE conferences SET title = ?, slug = ?, category_id = ?, date = ?, location = ?, description = ?, featured = ?, status = ? WHERE id = ?',
      [title, slug, category_id, date, location, description, featured, status, id]
    )
    res.json({ message: 'Conference updated' })
  } catch (error) {
    res.status(500).json({ message: 'Failed to update conference', error })
  }
})

router.delete('/:id', authenticate, authorize('admin'), async (req, res) => {
  try {
    const { id } = req.params
    await pool.query('DELETE FROM conferences WHERE id = ?', [id])
    res.json({ message: 'Conference deleted' })
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete conference', error })
  }
})

export default router
