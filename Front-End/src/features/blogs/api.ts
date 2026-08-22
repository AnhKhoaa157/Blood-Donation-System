import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { httpClient } from "../../lib/http/client";
import { apiRequest } from "../../lib/http/request";
import type { Blog, BlogCategory, Page } from "../../lib/api/types";

export function getBlogs(params: Record<string, unknown> = {}) {
  return apiRequest<Page<Blog>>(() =>
    httpClient.get("/api/blogs", { params: { ...params, status: 1 } })
  );
}

export function getBlogDetail(id: number | string) {
  return apiRequest<Blog>(() => httpClient.get(`/api/blogs/${id}`));
}

export function createBlog(formData: FormData) {
  return apiRequest<Blog>(() =>
    httpClient.post("/api/blogs", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
  );
}

export function updateBlog(id: number | string, formData: FormData) {
  return apiRequest<Blog>(() =>
    httpClient.put(`/api/blogs/${id}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
  );
}

export function deleteBlog(id: number | string) {
  return apiRequest<void>(() => httpClient.delete(`/api/blogs/${id}`));
}

export function getBlogCategories() {
  return apiRequest<BlogCategory[]>(() => httpClient.get("/api/blog-categories"));
}

export interface BlogCategoryPayload {
  tieude: string;
  noidung?: string;
}

export function createBlogCategory(payload: BlogCategoryPayload) {
  return apiRequest<BlogCategory>(() => httpClient.post("/api/blog-categories", payload));
}

export function getBlogCategoryDetail(id: number | string) {
  return apiRequest<BlogCategory>(() => httpClient.get(`/api/blog-categories/${id}`));
}

export function updateBlogCategory(id: number | string, payload: BlogCategoryPayload) {
  return apiRequest<BlogCategory>(() => httpClient.put(`/api/blog-categories/${id}`, payload));
}

export const blogKeys = {
  list: (params: Record<string, unknown>) => ["blogs", "list", params] as const,
  detail: (id: number | string) => ["blogs", "detail", id] as const,
  categories: () => ["blog-categories"] as const,
  categoryDetail: (id: number | string) => ["blog-categories", "detail", id] as const,
};

export function useBlogs(params: Record<string, unknown> = {}) {
  return useQuery({ queryKey: blogKeys.list(params), queryFn: () => getBlogs(params) });
}

export function useBlogDetail(id: number | string | undefined) {
  return useQuery({
    queryKey: blogKeys.detail(id ?? ""),
    queryFn: () => getBlogDetail(id as string),
    enabled: Boolean(id),
  });
}

export function useBlogCategories() {
  return useQuery({ queryKey: blogKeys.categories(), queryFn: getBlogCategories, staleTime: 5 * 60_000 });
}

export function useCreateBlog() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: createBlog,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["blogs"] }),
  });
}

export function useUpdateBlog(id: number | string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (formData: FormData) => updateBlog(id, formData),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["blogs"] }),
  });
}

export function useDeleteBlog() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: deleteBlog,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["blogs"] }),
  });
}

export function useCreateBlogCategory() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: createBlogCategory,
    onSuccess: () => qc.invalidateQueries({ queryKey: blogKeys.categories() }),
  });
}

export function useUpdateBlogCategory(id: number | string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (payload: BlogCategoryPayload) => updateBlogCategory(id, payload),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: blogKeys.categories() });
      qc.invalidateQueries({ queryKey: blogKeys.categoryDetail(id) });
    },
  });
}

export function useBlogCategoryDetail(id: number | string | undefined) {
  return useQuery({
    queryKey: blogKeys.categoryDetail(id ?? ""),
    queryFn: () => getBlogCategoryDetail(id as string),
    enabled: Boolean(id),
  });
}
