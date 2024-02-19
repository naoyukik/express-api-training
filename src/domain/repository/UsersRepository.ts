import {Prisma, Users} from "@prisma/client";
import {CreateUserOptions, DeleteUserOptions, ReadUserOptions, UpdateUserOptions} from "../dto/CreateUserOptions";

export interface UsersRepository {
	create(param: CreateUserOptions): Promise<Users>;
  update(param: UpdateUserOptions): Promise<Users>;
  fetch(param: ReadUserOptions): Promise<Users | null>;
  delete(param: DeleteUserOptions): Promise<Users>;
}
