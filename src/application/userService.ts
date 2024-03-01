import { Users } from "@prisma/client";
import {
  CreateUserOptions,
  DeleteUserOptions,
  ReadUserOptions,
  UpdateUserOptions,
} from "../domain/dto/CreateUserOptions";
import { create, fetch, remove, update } from "../infrastructure/repository/users";

export const createUser = async (createUserCommand: CreateUserOptions): Promise<Users> => {
  return await create(createUserCommand);
};

export const updateUser = async (putUserCommand: UpdateUserOptions): Promise<Users> => {
  return await update(putUserCommand);
};

export const readUser = async (readUserCommand: ReadUserOptions): Promise<Users | null> => {
  return await fetch(readUserCommand);
};

export const deleteUser = async (deleteUserCommand: DeleteUserOptions): Promise<Users> => {
  return await remove(deleteUserCommand);
};
