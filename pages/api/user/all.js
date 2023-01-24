import { prisma } from "../../../utils/prisma.util";

export default function handler(req, res) {
  const { method } = req
  switch (method) {
    case 'GET':
      prisma.user.findMany({
        select: {
          id: true,
          username: true,
          role: true,
          createdAt: true,
          updatedAt: true,
        }
      })
        .then((user) => {
          if (user === null) return res.status(404).json({ message: 'User not found', data: null })
          return res.status(200).json({ message: 'success', data: user })
        })
        .catch((err) => {
          return res.status(500).json({ message: 'error', error: err.message })
        })
      break;

    default:
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}