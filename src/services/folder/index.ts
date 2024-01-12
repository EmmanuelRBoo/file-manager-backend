import { prisma } from '../../prisma'
import { IGetFolder } from '../../interfaces'
import { verify } from '../../controllers/auth/token'
import user from '../user'

const excludePassword = (data: IGetFolder) => {

}

const getAllFolders = async () => {
    const folders = await prisma.folder.findMany()

    return folders
}

const getFolderByOwner = async (owner: string) => {
    const folders = await prisma.folder.findMany({ where: { owner } })

    return folders
}

export default {
    getAllFolders,
    getFolderByOwner
}