import { prisma } from "../../../utils/prisma.util"

export default function handler(req, res) {
  if (req.method === 'GET') {
    prisma.guru.findMany()
      .then((guru) => {
        res.status(200).json({ message: 'success', data: guru })
      })
      .catch((err) => {
        res.status(500).json({ message: 'error', error: err })
      })
  }
}