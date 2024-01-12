export interface IGetUser {
    username: string
}

export interface IPostUser {
    username: string
    image?: string
    email: string 
    password: string
    roleId: number
}

export interface IToken {
    email: string
    username: string
    key: string
}