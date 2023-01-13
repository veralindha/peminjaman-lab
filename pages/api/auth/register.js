import { prisma } from '../../../utils/prisma.util'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password, role, color } = req.body
    const data = {
      username,
      password,
      role,
      color
    }
    prisma.user.create({ data })
      .then((user) => {
        res.status(200).json({message: 'success', data: user})
      })
      .catch((err) => {
        res.status(500).json({message: 'error', error: err})
      })
  }
}