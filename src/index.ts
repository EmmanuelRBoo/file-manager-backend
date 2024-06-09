import Express, { Request, Response } from 'express'
import cors from 'cors'

import { authRouter, folderRouter } from './routes'
import { PORT } from './constants'

const app = Express()

app.use(Express.json())
app.use(cors())

app.use('/api/v1/',
    authRouter,
    folderRouter
)

app.use('/', (req: Request, res: Response) => res.status(200).json({ hi: 'Its working' }))

const startServer = () => {
    console.log(`server up on port: ${PORT}`)
}

app.listen(PORT, startServer)