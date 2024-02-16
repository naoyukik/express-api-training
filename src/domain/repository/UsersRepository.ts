import { Users } from "@prisma/client";
import CreateUserOptions from "../dto/CreateUserOptions";

export interface UsersRepository {
	create(param: CreateUserOptions): Promise<Users>;
}
