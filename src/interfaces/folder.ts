export interface IGetFolder {
    owner: string
    name: string
    size: number
    files: string[]
    createdAt: string
    updatedAt: string
}

export interface IPostFolder {
    owner: string,
    name: string
}