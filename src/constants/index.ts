import { config } from 'dotenv'

config()

export const PORT = process.env.PORT
export const SECRET = String(process.env.SECRET)