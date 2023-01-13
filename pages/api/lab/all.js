import { prisma } from "../../../utils/prisma.util";

export default function handler(req, res) {
  if (req.method === 'GET') {
    prisma.lab.findMany()
      .then((lab) => {
        res.status(200).json({ message: 'success', data: lab })
      })
      .catch((err) => {
        res.status(500).json({ message: 'error', error: err })
      })
  }
}