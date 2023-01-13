import { prisma } from "../../../utils/prisma.util"

export default function handler(req, res) {
  if (req.method === 'GET') {
    prisma.schedule.findMany()
      .then((jadwal) => {
        res.status(200).json({ message: 'success', data: jadwal })
      })
      .catch((err) => {
        res.status(500).json({ message: 'error', error: err })
      })
  }
}