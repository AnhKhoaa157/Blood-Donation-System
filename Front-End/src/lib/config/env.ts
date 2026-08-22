export const API_BASE_URL = import.meta.env.VITE_BASE_URL;
export const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;
export const TINYMCE_API_KEY = import.meta.env.VITE_TINYMCE_API_KEY || "no-api-key";

export function resolveImageUrl(path: string | null | undefined): string | undefined {
  if (!path) return undefined;
  if (/^https?:\/\//i.test(path)) return path;
  return `${IMAGE_BASE_URL}${path}`;
}
