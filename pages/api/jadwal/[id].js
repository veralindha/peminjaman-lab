import { prisma } from "../../../utils/prisma.util"

export default function handler(req, res) {
  if (req.method === 'GET') {
    const { id } = req.query
    prisma.schedule.findUnique({
      where: {
        id: parseInt(id)
      }
    })
      .then((jadwal) => {
        res.status(200).json({ message: 'success', data: jadwal })
      })
      .catch((err) => {
        res.status(500).json({ message: 'error', error: err })
      })
  }
}