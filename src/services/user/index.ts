import { prisma } from '../../prisma'
import { IGetUser, IPostUser } from '../../interfaces'

const postUser = async (data: IPostUser) => {

    return await prisma.user.create({ data })
}

const getUser = async ({ username }: IGetUser) => {

    return await prisma.user.findUnique({ where: { username }})
}


export default {
    getUser,
    postUser
}