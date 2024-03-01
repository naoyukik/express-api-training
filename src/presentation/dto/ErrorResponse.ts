export interface SuccessResponse<T> {
  status: "success";
  data: T;
}

export interface ErrorContent {
  code: number;
  message: string;
}

export interface ErrorResponse {
  status: "error";
  data: ErrorContent;
}
