const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const labs = await prisma.lab.createMany({
    data: [
      { name: 'Lab 1' },
      { name: 'Lab 2' },
      { name: 'Lab 3' },
      { name: 'Lab 4' },
      { name: 'Lab 5' },
      { name: 'Lab 6' },
      { name: 'Lab 7' },
    ],
    skipDuplicates: true
  });

  const gurus = await prisma.guru.createMany({
    data: [
      { name: 'Alex', color: '#FF0000' },
      { name: 'Hilal', color: '#00FF00' },
      { name: 'Reza', color: '#0000FF' },
      { name: 'Dendi', color: '#FFFF00' },
      { name: 'Zeta', color: '#00FFFF' },
      { name: 'Yogi', color: '#FF00FF' },
      { name: 'Herlambang', color: '#000000' },
      { name: 'Fuad', color: '#000000' }
    ],
    skipDuplicates: true
  });
  
  const users = await prisma.user.createMany({
    data: [
      { username: 'admin', password: 'admin', role: 'FULL' },
      { username: 'user', password: 'user', role: 'VIEW' }
    ],
    skipDuplicates: true
  });
  
  const deleteSchedules = await prisma.schedule.deleteMany({});
  const schedules = await prisma.schedule.createMany({
    data: [
      // Senin
      { guruId: 1, labId: 5, course: 'XI ASJ', day: 'SENIN', start_session: '1', end_session: '3' },
      { guruId: 2, labId: 4, course: 'XII PWPB', day: 'SENIN', start_session: '1', end_session: '8' },
      { guruId: 3, labId: 5, course: 'XI AIJ', day: 'SENIN', start_session: '4', end_session: '6' },
      { guruId: 4, labId: 5, course: 'X ASJ', day: 'SENIN', start_session: '7', end_session: '8' },
      { guruId: 5, labId: 6, course: 'XI TLJ', day: 'SENIN', start_session: '1', end_session: '6' },
      { guruId: 7, labId: 1, course: 'X PPLG', day: 'SENIN', start_session: '1', end_session: '8' },
      /// Selasa
      { guruId: 1, labId: 5, course: 'XI ASJ', day: 'SELASA', start_session: '1', end_session: '3' },
      { guruId: 2, labId: 4, course: 'XII PWPB', day: 'SELASA', start_session: '1', end_session: '8' },
      { guruId: 3, labId: 5, course: 'XI AIJ', day: 'SELASA', start_session: '4', end_session: '6' },
      { guruId: 4, labId: 5, course: 'X ASJ', day: 'SELASA', start_session: '7', end_session: '8' },
      { guruId: 5, labId: 6, course: 'XI TLJ', day: 'SELASA', start_session: '1', end_session: '6' },
      { guruId: 7, labId: 1, course: 'X PPLG', day: 'SELASA', start_session: '1', end_session: '8' },
      /// Rabu
      { guruId: 1, labId: 5, course: 'XI ASJ', day: 'RABU', start_session: '1', end_session: '3' },
      { guruId: 2, labId: 4, course: 'XII PWPB', day: 'RABU', start_session: '1', end_session: '8' },
      { guruId: 3, labId: 5, course: 'XI AIJ', day: 'RABU', start_session: '4', end_session: '6' },
      { guruId: 4, labId: 5, course: 'X ASJ', day: 'RABU', start_session: '7', end_session: '8' },
      { guruId: 5, labId: 6, course: 'XI TLJ', day: 'RABU', start_session: '1', end_session: '6' },
      { guruId: 7, labId: 1, course: 'X PPLG', day: 'RABU', start_session: '1', end_session: '8' },
      /// Kamis
      { guruId: 1, labId: 5, course: 'XI ASJ', day: 'KAMIS', start_session: '1', end_session: '3' },
      { guruId: 2, labId: 4, course: 'XII PWPB', day: 'KAMIS', start_session: '1', end_session: '8' },
      { guruId: 3, labId: 5, course: 'XI AIJ', day: 'KAMIS', start_session: '4', end_session: '6' },
      { guruId: 4, labId: 5, course: 'X ASJ', day: 'KAMIS', start_session: '7', end_session: '8' },
      { guruId: 5, labId: 6, course: 'XI TLJ', day: 'KAMIS', start_session: '1', end_session: '6' },
      { guruId: 7, labId: 1, course: 'X PPLG', day: 'KAMIS', start_session: '1', end_session: '8' },
      /// Jumat
      { guruId: 1, labId: 5, course: 'XI ASJ', day: 'JUMAT', start_session: '1', end_session: '3' },
      { guruId: 2, labId: 4, course: 'XII PWPB', day: 'JUMAT', start_session: '1', end_session: '8' },
      { guruId: 3, labId: 5, course: 'XI AIJ', day: 'JUMAT', start_session: '4', end_session: '6' },
      { guruId: 4, labId: 5, course: 'X ASJ', day: 'JUMAT', start_session: '7', end_session: '8' },
      { guruId: 5, labId: 6, course: 'XI TLJ', day: 'JUMAT', start_session: '1', end_session: '6' },
      { guruId: 7, labId: 1, course: 'X PPLG', day: 'JUMAT', start_session: '1', end_session: '8' },
      /// Sabtu
      { guruId: 1, labId: 5, course: 'XI ASJ', day: 'SABTU', start_session: '1', end_session: '3' },
      { guruId: 2, labId: 4, course: 'XII PWPB', day: 'SABTU', start_session: '1', end_session: '8' },
      { guruId: 3, labId: 5, course: 'XI AIJ', day: 'SABTU', start_session: '4', end_session: '6' },
      { guruId: 4, labId: 5, course: 'X ASJ', day: 'SABTU', start_session: '7', end_session: '8' },
      { guruId: 5, labId: 6, course: 'XI TLJ', day: 'SABTU', start_session: '1', end_session: '6' },
      { guruId: 7, labId: 1, course: 'X PPLG', day: 'SABTU', start_session: '1', end_session: '8' },
    ],
    skipDuplicates: true
  });

  
  console.log({ labs, gurus, users, deleteSchedules, schedules });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  })