import { Prisma, PrismaClient, Users } from "@prisma/client";
import {
  CreateUserOptions,
  DeleteUserOptions,
  ReadUserOptions,
  UpdateUserOptions,
} from "../../domain/dto/CreateUserOptions";
import { UsersRepository } from "../../domain/repository/UsersRepository";
import { UserNotFound } from "../../domain/exception/UserNotFound";

const prisma = new PrismaClient();

export const create: UsersRepository["create"] = async (param: CreateUserOptions): Promise<Users> => {
  const user: Prisma.UsersCreateInput = {
    name: param.name,
    nickname: param.nickname,
  };

  return prisma.users.create({ data: user });
};

export const update: UsersRepository["update"] = async (param: UpdateUserOptions): Promise<Users> => {
  const where: Prisma.UsersUpdateArgs = {
    where: { id: param.id },
    data: { name: param.name, nickname: param.nickname },
  };
  try {
    return await prisma.users.update(where);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      throw new UserNotFound();
    }
    console.error(error);
    throw error;
  }
};

export const fetch: UsersRepository["fetch"] = async (param: ReadUserOptions): Promise<Users> => {
  const where: Prisma.UsersFindUniqueArgs = {
    where: {
      id: param.id,
      name: param.name,
      nickname: param.nickname,
    },
  };

  const result: Users | null = await prisma.users.findUnique(where);
  if (result === null) throw new UserNotFound();
  return result;
};

export const remove: UsersRepository["delete"] = async (param: DeleteUserOptions): Promise<Users> => {
  const where: Prisma.UsersDeleteArgs = {
    where: { id: param.id },
  };

  try {
    const deleteUserResult: Users = await prisma.users.delete(where);
    return deleteUserResult;
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      throw new UserNotFound();
    }
    throw error;
  }
};
