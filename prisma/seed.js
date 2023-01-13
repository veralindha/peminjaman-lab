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
  
  console.log({ labs, gurus, users });
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