import { ErrorContent, ErrorResponse, SuccessResponse } from "./dto/ErrorResponse";
import { UserNotFound } from "../domain/exception/UserNotFound";

export const toSuccessResponse = <T>(responseData: T): SuccessResponse<T> => {
  return {
    status: "success",
    data: responseData,
  };
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
