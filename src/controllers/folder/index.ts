import { Request, Response } from 'express'

import { folder } from '../../services'
import { verify } from '../../controllers/auth/token'

const getAllFolders = async (req: Request, res: Response) => {
    const { username, roleId } = req.body
    
    const data = roleId === 0  ? await folder.getAllFolders() : await folder.getFolderByOwner(username)

    return res.status(200).json(data)
}

export default {
    getAllFolders,
}