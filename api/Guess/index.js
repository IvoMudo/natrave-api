import { PrismaClient } from "@prisma/client"
import jwt from 'jsonwebtoken'
import { addDays } from 'date-fns'

const prisma = new PrismaClient()

export const create = async (ctx) => {
    const [type, token] = ctx.headers.authorization?.split(' ')

    try {
        const tokenData = await jwt.verify(token, process.env.JWT_SECRET)

        const userId = tokenData.sub
        const { gameId, homeTeamScore = 7, awayTeamScore = 7 } = ctx.request.body

        const guess = await prisma.score.findMany({
            where: { userId, gameId },
        })

        ctx.body = guess.length > 0
            ? await prisma.score.update({
                where: { id: guess[0].id },
                data: { homeTeamScore, awayTeamScore }
            })
            : await prisma.score.create({
                data: { userId, gameId, homeTeamScore, awayTeamScore }
            })

    } catch (error) {
        ctx.status = 401
        console.log(error)
        return
    }
}

export const gameGuess = async (ctx) => {
    const userId = ctx.request.query.userId
    const matchId = ctx.request.query.gameId

    // console.log([userId, matchId])
    try {
        const scores = await prisma.score.findMany({
            where: {
                AND: [
                    { userId: userId },
                    { gameId: matchId }
                ]
            }
        })

        ctx.body = scores
        ctx.status = 201
    } catch (error) {
        ctx.body = error
        ctx.status = 500
        console.log(error)
    }
}