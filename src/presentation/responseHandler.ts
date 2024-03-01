import { ErrorContent, ErrorResponse, SuccessResponse } from "./dto/ErrorResponse";
import { UserNotFound } from "../domain/exception/UserNotFound";
import { Response } from "express";

export const toSuccessResponse = <T>(responseData: T): SuccessResponse<T> => {
  return {
    status: "success",
    data: responseData,
  };
};

export const sendSuccessResponse = <T>(res: Response, sendData: T) => {
  res.json(toSuccessResponse(sendData));
};

export const sendErrorResponse = (res: Response, error: Error) => {
  res.status(getErrorHttpStatus(error)).json(toErrorResponse(error));
};

export const toErrorResponse = (error: Error): ErrorResponse => {
  return {
    status: "error",
    data: ((): ErrorContent => {
      if (error instanceof UserNotFound) {
        return {
          code: error.code,
          message: error.message,
        };
      }
      return {
        code: -1,
        message: error.message ?? "Unknown error occurred",
      };
    })(),
  };
};

export const getErrorHttpStatus = (error: Error): number => {
  if (error instanceof UserNotFound) {
    return 404;
  }
  return 500;
};
