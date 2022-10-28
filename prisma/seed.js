import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const Gamelog = [
    {
        "gameTime": new Date("2022-11-20T16:00:00Z"),
        "homeTeam": "cat",
        "awayTeam": "equ"
    },
    {
        "gameTime": new Date("2022-11-21T13:00:00Z"),
        "homeTeam": "ing",
        "awayTeam": "ira"
    },
    {
        "gameTime": new Date("2022-11-21T16:00:00Z"),
        "homeTeam": "sen",
        "awayTeam": "hol"
    },
    {
        "gameTime": new Date("2022-11-21T19:00:00Z"),
        "homeTeam": "eua",
        "awayTeam": "gal"
    },
    {
        "gameTime": new Date("2022-11-22T10:00:00Z"),
        "homeTeam": "arg",
        "awayTeam": "ara"
    },
    {
        "gameTime": new Date("2022-11-22T13:00:00Z"),
        "homeTeam": "din",
        "awayTeam": "tun"
    },
    {
        "gameTime": new Date("2022-11-22T16:00:00Z"),
        "homeTeam": "mex",
        "awayTeam": "pol"
    },
    {
        "gameTime": new Date("2022-11-22T19:00:00Z"),
        "homeTeam": "fra",
        "awayTeam": "aus"
    },
    {
        "gameTime": new Date("2022-11-23T10:00:00Z"),
        "homeTeam": "mar",
        "awayTeam": "cro"
    },
    {
        "gameTime": new Date("2022-11-23T13:00:00Z"),
        "homeTeam": "ale",
        "awayTeam": "jap"
    },
    {
        "gameTime": new Date("2022-11-23T16:00:00Z"),
        "homeTeam": "esp",
        "awayTeam": "cos"
    },
    {
        "gameTime": new Date("2022-11-23T19:00:00Z"),
        "homeTeam": "bel",
        "awayTeam": "can"
    },
    {
        "gameTime": new Date("2022-11-24T10:00:00Z"),
        "homeTeam": "sui",
        "awayTeam": "cam"
    },
    {
        "gameTime": new Date("2022-11-24T13:00:00Z"),
        "homeTeam": "uru",
        "awayTeam": "cor"
    },
    {
        "gameTime": new Date("2022-11-24T16:00:00Z"),
        "homeTeam": "por",
        "awayTeam": "gan"
    },
    {
        "gameTime": new Date("2022-11-24T19:00:00Z"),
        "homeTeam": "bra",
        "awayTeam": "ser"
    },
    {
        "gameTime": new Date("2022-11-25T10:00:00Z"),
        "homeTeam": "gal",
        "awayTeam": "ira"
    },
    {

        "gameTime": new Date("2022-11-25T13:00:00Z"),
        "homeTeam": "cat",
        "awayTeam": "sen"
    },
    {
        "gameTime": new Date("2022-11-25T16:00:00Z"),
        "homeTeam": "hol",
        "awayTeam": "equ"
    },
    {
        "gameTime": new Date("2022-11-25T19:00:00Z"),
        "homeTeam": "ing",
        "awayTeam": "eua"
    },
    {
        "gameTime": new Date("2022-11-26T10:00:00Z"),
        "homeTeam": "tun",
        "awayTeam": "aus"
    },
    {

        "gameTime": new Date("2022-11-26T13:00:00Z"),
        "homeTeam": "pol",
        "awayTeam": "ara"
    },
    {
        "gameTime": new Date("2022-11-26T16:00:00Z"),
        "homeTeam": "fra",
        "awayTeam": "din"
    },
    {
        "gameTime": new Date("2022-11-26T19:00:00Z"),
        "homeTeam": "arg",
        "awayTeam": "mex"
    },
    {
        "gameTime": new Date("2022-11-27T10:00:00Z"),
        "homeTeam": "jap",
        "awayTeam": "cos"
    },
    {
        "gameTime": new Date("2022-11-27T13:00:00Z"),
        "homeTeam": "bel",
        "awayTeam": "mar"
    },
    {
        "gameTime": new Date("2022-11-27T16:00:00Z"),
        "homeTeam": "cro",
        "awayTeam": "can"
    },
    {
        "gameTime": new Date("2022-11-27T19:00:00Z"),
        "homeTeam": "esp",
        "awayTeam": "sui"
    },
    {
        "gameTime": new Date("2022-11-28T10:00:00Z"),
        "homeTeam": "cam",
        "awayTeam": "ser"
    },
    {
        "gameTime": new Date("2022-11-28T13:00:00Z"),
        "homeTeam": "cor",
        "awayTeam": "gan"
    },
    {
        "gameTime": new Date("2022-11-28T16:00:00Z"),
        "homeTeam": "bra",
        "awayTeam": "sui"
    },
    {
        "gameTime": new Date("2022-11-28T19:00:00Z"),
        "homeTeam": "por",
        "awayTeam": "uru"
    },
    {
        "gameTime": new Date("2022-11-29T15:00:00Z"),
        "homeTeam": "equ",
        "awayTeam": "sen"
    },
    {
        "gameTime": new Date("2022-11-29T15:00:00Z"),
        "homeTeam": "hol",
        "awayTeam": "cat"
    },
    {
        "gameTime": new Date("2022-11-29T19:00:00Z"),
        "homeTeam": "gal",
        "awayTeam": "ing"
    },
    {
        "gameTime": new Date("2022-11-29T19:00:00Z"),
        "homeTeam": "ira",
        "awayTeam": "eua"
    },
    {
        "gameTime": new Date("2022-11-30T15:00:00Z"),
        "homeTeam": "aus",
        "awayTeam": "din"
    },
    {
        "gameTime": new Date("2022-11-30T15:00:00Z"),
        "homeTeam": "tun",
        "awayTeam": "fra"
    },
    {
        "gameTime": new Date("2022-11-30T19:00:00Z"),
        "homeTeam": "pol",
        "awayTeam": "arg"
    },
    {
        "gameTime": new Date("2022-11-30T19:00:00Z"),
        "homeTeam": "ara",
        "awayTeam": "mex"
    },
    {
        "gameTime": new Date("2022-12-01T15:00:00Z"),
        "homeTeam": "cro",
        "awayTeam": "bel"
    },
    {
        "gameTime": new Date("2022-12-01T15:00:00Z"),
        "homeTeam": "can",
        "awayTeam": "mar"
    },
    {
        "gameTime": new Date("2022-12-01T19:00:00Z"),
        "homeTeam": "jap",
        "awayTeam": "esp"
    },
    {
        "gameTime": new Date("2022-12-01T19:00:00Z"),
        "homeTeam": "cos",
        "awayTeam": "ale"
    },
    {
        "gameTime": new Date("2022-12-02T15:00:00Z"),
        "homeTeam": "gan",
        "awayTeam": "uru"
    },
    {
        "gameTime": new Date("2022-12-02T15:00:00Z"),
        "homeTeam": "cor",
        "awayTeam": "por"
    },
    {
        "gameTime": new Date("2022-12-02T19:00:00Z"),
        "homeTeam": "ser",
        "awayTeam": "sui"
    },
    {
        "gameTime": new Date("2022-12-02T19:00:00Z"),
        "homeTeam": "cam",
        "awayTeam": "bra"
    }
]

async function main() {
    await prisma.game.createMany({
        data: Gamelog
    })
}

main()