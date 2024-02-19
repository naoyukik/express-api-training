import express, { Request, Response, NextFunction } from "express";
import { createUser, deleteUser, readUser, updateUser } from "../application/userService";
import {
  CreateUserOptions,
  DeleteUserOptions,
  ReadUserOptions,
  UpdateUserOptions,
} from "../domain/dto/CreateUserOptions";
import { Users } from "@prisma/client";
const router = express.Router();

router.use(express.json());

/* GET users listing. */
router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("respond with a resource");
});

/**
 * 新しいユーザーの作成
 */
router.post("/", async (req: Request, res: Response) => {
  const postBody = req.body;
  const createUserCommand: CreateUserOptions = {
    name: postBody.name,
    nickname: postBody.nickname,
  };
  const result: Users = await createUser(createUserCommand);
  res.json(result);
});

/**
 * ユーザー情報の更新
 */
router.put("/", async (req: Request, res: Response) => {
  const postBody = req.body;
  const updateUserCommand: UpdateUserOptions = {
    id: postBody.id,
    name: postBody.name,
    nickname: postBody.nickname,
  };
  const result: Users = await updateUser(updateUserCommand);
  res.json(result);
});

/**
 * ユーザー情報の確認
 */
router.get("/", async (req: Request, res: Response) => {
  const readUserCommand: ReadUserOptions = req.query;
  const result: Users | null = await readUser(readUserCommand);
  res.json(result);
});

/**
 *
 */
router.delete("/:id", async (req: Request, res: Response) => {
  const deleteUserCommand: DeleteUserOptions = { id: req.params.id };
  const result: Users | null = await deleteUser(deleteUserCommand);
  res.json(result);
});

export default router;
