import { Router } from 'express'

import { folder } from '../../controllers'
import { authMiddleware } from '../../middlewares'

const folderRouter = Router()

folderRouter.get('/folders',
    authMiddleware.verifyAuth,
    authMiddleware.verifyRole,
    folder.getAllFolders,
)

export default folderRouter