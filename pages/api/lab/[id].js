import { prisma } from "../../../utils/prisma.util"

export default function handler(req, res) {
  if (req.method === 'GET') {
    const { id } = req.query
    prisma.lab.findUnique({
      where: {
        id: parseInt(id)
      }
    })
      .then((lab) => {
        res.status(200).json({ message: 'success', data: lab })
      })
      .catch((err) => {
        res.status(500).json({ message: 'error', error: err })
      })
  }
}