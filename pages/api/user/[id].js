import { prisma } from "../../../utils/prisma.util";

export default function handler(req, res) {
  const { method } = req
  const { id } = req.query
  const { username, password } = req.body
  switch (method) {
    case 'GET':
      prisma.user.findUnique({
        where: {
          id: parseInt(id)
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

    case 'PUT':
      prisma.user.update({
        where: {
          id: parseInt(id)
        },
        data: {
          username: username,
          password: password
        }
      })
        .then((user) => {
          return res.status(200).json({ message: 'success', data: user })
        })
        .catch((err) => {
          return res.status(500).json({ message: 'error', error: err.message })
        })
      break;

    case 'DELETE':
      prisma.user.delete({
        where: {
          id: parseInt(id)
        }
      })
        .then((user) => {
          return res.status(200).json({ message: 'success', data: user })
        })
        .catch((err) => {
          return res.status(500).json({ message: 'error', error: err.message })
        })
      break;

    default:
      return res.status(405).end(`Method ${method} Not Allowed`)
  }
}