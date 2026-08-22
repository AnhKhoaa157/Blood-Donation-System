import type { AxiosResponse } from "axios";
import { toApiError } from "./errors";

/** Runs an axios call and unwraps `.data`, converting failures to ApiError. */
export async function apiRequest<T>(
  call: () => Promise<AxiosResponse<T>>
): Promise<T> {
  try {
    const response = await call();
    return response.data;
  } catch (error) {
    throw toApiError(error);
  }
}
