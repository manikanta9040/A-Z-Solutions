import express from 'express'
import { pool } from '../config/db'
import { authenticate, authorize } from '../middleware/authMiddleware'

const router = express.Router()

const categoryIdFor = async (category?: string) => {
  if (!category?.trim()) return null

  const name = category.trim()
  const [existing] = await pool.query('SELECT id FROM categories WHERE name = ? LIMIT 1', [name]) as any
  if (existing[0]) return existing[0].id

  const slug = `${name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}-${Date.now()}`
  const [result] = await pool.query('INSERT INTO categories (name, slug) VALUES (?, ?)', [name, slug]) as any
  return result.insertId
}

router.get('/', async (_req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT conferences.*, COALESCE(categories.name, 'General') AS category FROM conferences LEFT JOIN categories ON categories.id = conferences.category_id ORDER BY conferences.created_at DESC"
    )
    res.json(rows)
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch conferences', error })
  }
})

router.post('/', authenticate, authorize('admin'), async (req, res) => {
  try {
    const { title, slug, category, date, location, description, featured, status } = req.body
    const categoryId = await categoryIdFor(category)
    const [result] = await pool.query(
      'INSERT INTO conferences (title, slug, category_id, date, location, description, featured, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [title, slug, categoryId, date, location, description, featured || false, status || 'upcoming']
    ) as any
    res.status(201).json({ id: result.insertId, message: 'Conference created' })
  } catch (error) {
    res.status(500).json({ message: 'Failed to create conference', error })
  }
})

router.put('/:id', authenticate, authorize('admin'), async (req, res) => {
  try {
    const { id } = req.params
    const { title, slug, category, date, location, description, featured, status } = req.body
    const categoryId = await categoryIdFor(category)
    await pool.query(
      'UPDATE conferences SET title = ?, slug = ?, category_id = ?, date = ?, location = ?, description = ?, featured = ?, status = ? WHERE id = ?',
      [title, slug, categoryId, date, location, description, featured, status || 'upcoming', id]
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
