import { prisma } from "../../../utils/prisma.util"

export default function handler(req, res) {
  const { method } = req

  if (method === 'POST') {
    const { username, password } = req.body
    prisma.user.create({
      data: {
        username: username,
        password: password
      }
    })
      .then((user) => {
        res.status(200).json({ message: 'success', data: user })
      })
      .catch((err) => {
        res.status(500).json({ message: 'error', error: err })
      })
  } else {
    res.status(405).end(`Method ${method} Not Allowed`)
  }
}