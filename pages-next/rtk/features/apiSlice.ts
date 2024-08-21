import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
      keepUnusedDataFor: 120,
    }),
    getPost: builder.query({
      query: (postId) => `/posts/${postId}`,
      keepUnusedDataFor: 120,
    }),
  }),
});
export const { useGetPostsQuery, useGetPostQuery } = apiSlice;
