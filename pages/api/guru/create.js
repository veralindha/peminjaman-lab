import { prisma } from "../../../utils/prisma.util";

export default function handler(req, res) {
  const { method } = req;
  switch (method) {
    case 'POST':
      const { name, color } = req.body;
      const data = { name, color };
      if (!name || !color) {
        return res.status(400).json({ message: 'All fields are required' });
      }
      prisma.guru.create({
        data: data
      }).then((result) => {
        res.status(201).json({ message: 'Guru created successfully', data: result });
      }).catch((err) => {
        res.status(400).json({ message: 'Guru creation failed', error: err });
      });
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}