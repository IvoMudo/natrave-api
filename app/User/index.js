import { PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()

export const create = async (ctx) => {
    const password = await bcrypt.hash(ctx.request.body.password, 10)
    const formData = {
        name: ctx.request.body.name,
        username: ctx.request.body.username,
        email: ctx.request.body.email,
        password
    }

    try {
        const { password, ...user } = await prisma.user.create({ data: formData })
        ctx.body = user
        ctx.status = 201
    } catch (error) {
        ctx.body = error
        ctx.status = 500
        console.log(error)
    }
}

export const login = async (ctx) => {
    const [type, token] = ctx.headers.authorization.split(' ')
    const [email, myPlaintextPassword] = Buffer.from(token, 'base64').toString('utf-8').split(':')

    const user = await prisma.user.findUnique({
        where: { email }
    })

    if (!user) {
        ctx.status = 404
        return
    }

    const passwordMatch = await bcrypt.compare(myPlaintextPassword, user.password)

    if (!passwordMatch) {
        ctx.status = 404
        return
    }

    const { password, ...response } = user

    const accessToken = jwt.sign({
        sub: user.id,
        name: user.name,
        expiresIn: '1d'
    }, process.env.JWT_SECRET)

    ctx.body = {
        user: response,
        accessToken
    }
}

export const list = async (ctx) => {
    const username = ctx.request.params.username
    const user = await prisma.user.findUnique({
        where: { username: username }
    })

    try {
        const guesses = await prisma.score.findMany({
            where: {
                userId: user.id
            }
        })
        // console.log(scores)
        ctx.body = {
            name:user.name,
            guesses
        }
        ctx.status = 201
    } catch (error) {
        ctx.body = error
        ctx.status = 500
        console.log(error)
    }
}