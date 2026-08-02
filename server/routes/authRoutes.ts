import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { pool } from '../config/db'

const router = express.Router()

router.post('/login', async (req, res) => {
  const { email, password } = req.body

  try {
    const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]) as any
    const user = rows[0]

    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    const validPassword = await bcrypt.compare(password, user.password_hash)
    if (!validPassword) {
      return res.status(401).json({ message: 'Invalid password' })
    }

    const token = jwt.sign({ id: user.id, role: user.role, email: user.email }, process.env.JWT_SECRET || 'summit-sphere-secret', {
      expiresIn: '8h',
    })

    res.json({ token, user: { id: user.id, name: user.name, email: user.email, role: user.role } })
  } catch (error) {
    console.error('Admin login failed:', error)
    res.status(500).json({ message: 'Login failed', error })
  }
})

export default router
