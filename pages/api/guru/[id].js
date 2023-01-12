export default function handler(req, res) {
  const { id } = req.query
  if (req.method === 'GET') {
    prisma.guru.findUnique({
      where: {
        id: parseInt(id)
      }
    })
      .then((guru) => {
        res.status(200).json({ message: 'success', data: guru })
      })
      .catch((err) => {
        res.status(500).json({ message: 'error', error: err })
      })
  }
  if (req.method === 'PUT') {}
  if (req.method === 'DELETE') {}
}