import express, { NextFunction, Request, Response } from "express";
import { createUser, deleteUser, readUser, updateUser } from "../application/userService";
import {
  CreateUserOptions,
  DeleteUserOptions,
  ReadUserOptions,
  UpdateUserOptions,
} from "../domain/dto/CreateUserOptions";
import { Users } from "@prisma/client";
import { SuccessResponse } from "./dto/ErrorResponse";
import { toErrorResponse, toSuccessResponse } from "./responseHandler";

const router = express.Router();

router.use(express.json());

/**
 * Create new user
 */
router.post("/", async (req: Request, res: Response) => {
  const postBody = req.body;
  const createUserCommand: CreateUserOptions = {
    name: postBody.name,
    nickname: postBody.nickname,
  };
  try {
    const result: Users = await createUser(createUserCommand);
    sendSuccessResponse(res, result);
  } catch (error) {
    if (error instanceof Error) {
      sendErrorResponse(res, error);
    }
  }
});

/**
 * Update user data
 */
router.put("/", async (req: Request, res: Response) => {
  const postBody = req.body;
  const updateUserCommand: UpdateUserOptions = {
    id: postBody.id,
    name: postBody.name,
    nickname: postBody.nickname,
  };
  try {
    const result: Users = await updateUser(updateUserCommand);
    sendSuccessResponse(res, result);
  } catch (error) {
    if (error instanceof Error) {
      sendErrorResponse(res, error);
    }
  }
});

/**
 * Get user data
 */
router.get("/", async (req: Request, res: Response) => {
  const readUserCommand: ReadUserOptions = req.query;
  try {
    const result: Users | null = await readUser(readUserCommand);
    sendSuccessResponse(res, result);
  } catch (error) {
    if (error instanceof Error) {
      sendErrorResponse(res, error);
    }
  }
});

/**
 * Delete user data
 */
router.delete("/:id", async (req: Request, res: Response) => {
  const deleteUserCommand: DeleteUserOptions = { id: req.params.id };
  try {
    const result: Users = await deleteUser(deleteUserCommand);
    sendSuccessResponse(res, result);
  } catch (error) {
    if (error instanceof Error) {
      sendErrorResponse(res, error);
    }
  }
});

export default router;
