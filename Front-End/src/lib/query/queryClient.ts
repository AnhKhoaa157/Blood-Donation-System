import { QueryClient } from "@tanstack/react-query";
import { ApiError } from "../http/errors";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30_000,
      gcTime: 5 * 60_000,
      retry: (failureCount, error) => {
        if (error instanceof ApiError && error.status !== undefined) {
          // Don't retry on client errors — they won't succeed by retrying.
          if (error.status >= 400 && error.status < 500) return false;
        }
        return failureCount < 2;
      },
      retryDelay: (attemptIndex) => Math.min(500 * 2 ** attemptIndex, 2000),
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: false,
    },
  },
});
