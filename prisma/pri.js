import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// const games = await prisma.game.findMany({
//     where: {
//         gameTime: {
//             gte: new Date('2022-11-21T00:00:00.000Z'),
//             lt: new Date('2022-11-22T00:00:00.000Z')
//         }
//     }
// })
const user = await prisma.user.create({
    data: {
        name: 'outro dado',
        username: 'qqqqq',
        email: '@asdas.com',
        password: 'senha'
    }
})
console.log(user)