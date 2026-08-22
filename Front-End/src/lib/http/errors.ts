import axios from "axios";
import type { ApiErrorPayload } from "../api/types";

/** Normalized error shape every API call surfaces to UI code. */
export class ApiError extends Error {
  readonly status?: number;

  constructor(message: string, status?: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

const DEFAULT_MESSAGE = "Đã xảy ra lỗi. Vui lòng thử lại sau.";
const NETWORK_MESSAGE =
  "Không thể kết nối đến máy chủ. Vui lòng kiểm tra kết nối mạng.";

export function toApiError(error: unknown): ApiError {
  if (axios.isAxiosError<ApiErrorPayload>(error)) {
    if (!error.response) {
      return new ApiError(NETWORK_MESSAGE);
    }
    const message =
      error.response.data?.message ??
      error.response.data?.error ??
      DEFAULT_MESSAGE;
    return new ApiError(message, error.response.status);
  }
  if (error instanceof Error) {
    return new ApiError(error.message);
  }
  return new ApiError(DEFAULT_MESSAGE);
}
