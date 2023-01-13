import { prisma } from "../../../utils/prisma.util";

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { labId, guruId, day, course, start_session, end_session } = req.body;
    const data = { labId: parseInt(labId), guruId: parseInt(guruId), course, day, start_session, end_session };
    prisma.schedule.create({
      data: data
    }).then((result) => {
      res.status(201).json({ message: 'Jadwal created successfully', data: result });
    }).catch((err) => {
      res.status(400).json({ message: 'Jadwal creation failed', error: err.message });
    });
  }
}