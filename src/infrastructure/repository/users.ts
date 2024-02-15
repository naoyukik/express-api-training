import { Prisma, PrismaClient, Users } from '@prisma/client'
import CreateUserOptions from "../../domain/dto/CreateUserOptions";
import { UsersRepository } from '../../domain/repository/UsersRepository'

const prisma = new PrismaClient()

export const create: UsersRepository['create'] = async (param: CreateUserOptions): Promise<Users> => {
    const user: Prisma.UsersCreateInput = {
        name: param.name,
        nickname: param.nickname,
    }

    return prisma.users.create({data: user})
}