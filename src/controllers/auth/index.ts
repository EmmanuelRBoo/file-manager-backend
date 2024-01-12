import { Request, Response } from 'express'

import { user } from '../../services'
import { sign } from './token'

const register = async (req: Request, res: Response) => {
    const { username, password, email, roleId } = req.body

    await user.postUser({ username, password, email, roleId })

    return res.status(201).json({ message: 'Usuário criado com sucesso' })
}

export const login = async (req: Request, res: Response) => {
    const { username } = req.body

    const login = await user.getUser({ username })

    if (login) {
        const token = sign({ 
            username,
            email: login.email, 
            key: login.key,
            
        })
        
        const response = { 
            username, 
            token,
            email: login.email,
            role: login.roleId
        }

        return res.status(200).json(response)
    }
}

export default {
    login,
    register
}