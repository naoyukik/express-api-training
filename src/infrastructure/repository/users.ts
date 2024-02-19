import { Prisma, PrismaClient, Users } from "@prisma/client";
import {
  CreateUserOptions,
  DeleteUserOptions,
  ReadUserOptions,
  UpdateUserOptions
} from "../../domain/dto/CreateUserOptions";
import { UsersRepository } from "../../domain/repository/UsersRepository";

const prisma = new PrismaClient();

export const create: UsersRepository["create"] = async (
	param: CreateUserOptions,
): Promise<Users> => {
	const user: Prisma.UsersCreateInput = {
		name: param.name,
		nickname: param.nickname,
	};

	return prisma.users.create({ data: user });
};

export const update: UsersRepository["update"] = async (
  param: UpdateUserOptions,
): Promise<Users> => {

  const user: Prisma.UsersUpdateArgs = {
    where: {id: param.id},
    data: {name: param.name, nickname: param.nickname}
  }

  return prisma.users.update(user);
};

export const fetch: UsersRepository["fetch"] = async (
  param: ReadUserOptions,
): Promise<Users | null> => {
  const where: Prisma.UsersFindUniqueArgs = {
    where: {
      id: param.id,
      name: param.name,
      nickname: param.nickname,
    }
  };

  return prisma.users.findUnique(where);
};

export const remove: UsersRepository["delete"] = async (
  param: DeleteUserOptions,
): Promise<Users> => {

  const deleted: Prisma.UsersDeleteArgs = {
    where: {id: param.id},
  }

  return prisma.users.delete(deleted);
};
