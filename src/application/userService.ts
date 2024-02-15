import {create} from "../infrastructure/repository/users";
import CreateUserOptions from "../domain/dto/CreateUserOptions";
import {Users} from "@prisma/client";

export const createUser = async (createUserCommand: CreateUserOptions): Promise<Users> => {
  return await create(createUserCommand);
}