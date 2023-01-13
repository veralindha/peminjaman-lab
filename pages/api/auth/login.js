import { prisma } from "../../../utils/prisma.util"

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body
    const data = {
      username,
      password
    }
    prisma.user.findUnique({
      where: {
        username: data.username
      }
    })
      .then((user) => {
        if (user) {
          if (user.password === data.password) {
            res.status(200).json({ message: 'success', data: user })
          } else {
            res.status(401).json({ message: 'error', error: 'wrong password' })
          }
        } else {
          res.status(404).json({ message: 'error', error: 'user not found' })
        }
      })
      .catch((err) => {
        res.status(500).json({ message: 'error', error: err })
      })
  }
}