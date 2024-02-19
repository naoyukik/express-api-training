export interface CreateUserOptions {
	name: string;
	nickname?: string;
}

export interface UpdateUserOptions {
  id: string;
  name: string;
  nickname?: string;
}

export interface ReadUserOptions {
  id?: string;
  name?: string;
  nickname?: string;
}

export interface DeleteUserOptions {
  id: string;
}