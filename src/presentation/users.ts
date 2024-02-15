import express, { Request, Response, NextFunction } from 'express';
import {createUser} from "../application/userService";
import CreateUserOptions from "../domain/dto/CreateUserOptions";
import {Users} from "@prisma/client";
// import {create} from "../infrastructure/repository/users";
const router = express.Router();

router.use(express.json())

/* GET users listing. */
router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('respond with a resource');
});

/**
 * 新しいユーザーの作成
 */
router.post('/', async (req: Request, res: Response) => {
  const postBody = req.body
  const createUserCommand: CreateUserOptions = {name: postBody.name, nickname: postBody.nickname}
  const result: Users = await createUser(createUserCommand)
  res.json(result);
});

export default router;