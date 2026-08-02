import express from 'express'
import { pool } from '../config/db'
import { authenticate, authorize } from '../middleware/authMiddleware'

const router = express.Router()

router.get('/', async (_req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM categories ORDER BY name ASC')
    res.json(rows)
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch categories', error })
  }
})

router.post('/', authenticate, authorize('admin'), async (req, res) => {
  try {
    const { name, slug } = req.body
    const [result] = await pool.query('INSERT INTO categories (name, slug) VALUES (?, ?)', [name, slug]) as any
    res.status(201).json({ id: result.insertId, message: 'Category created' })
  } catch (error) {
    res.status(500).json({ message: 'Failed to create category', error })
  }
})

router.delete('/:id', authenticate, authorize('admin'), async (req, res) => {
  try {
    const { id } = req.params
    await pool.query('DELETE FROM categories WHERE id = ?', [id])
    res.json({ message: 'Category deleted' })
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete category', error })
  }
})

export default router
