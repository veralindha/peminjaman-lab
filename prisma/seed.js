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
      { name: 'Guru 1', color: '#FF0000' },
      { name: 'Guru 2', color: '#00FF00' },
      { name: 'Guru 3', color: '#0000FF' },
      { name: 'Guru 4', color: '#FFFF00' },
      { name: 'Guru 5', color: '#00FFFF' },
      { name: 'Guru 6', color: '#FF00FF' },
      { name: 'Guru 7', color: '#000000' }
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