import { PrismaClient } from "@prisma/client"
import { addDays } from 'date-fns'

const prisma = new PrismaClient()


export const list = async (ctx) => {
    const currenteDay = ctx.request.query.gameTime
    try {
        const games = await prisma.game.findMany({
            where: {
                gameTime: {
                    gte: new Date(currenteDay),
                    lt: addDays(new Date(currenteDay), 1)
                }
            }
        })
        ctx.body = games
        ctx.status = 201
    } catch (error) {
        ctx.body = error
        ctx.status = 500
        console.log(error)
    }
}