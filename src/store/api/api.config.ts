import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQuery, baseQueryWithReauth } from "./baseQueryWithReauth";

export const apiConfig = createApi({
  reducerPath: "apiConfig",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
  }),
  endpoints: () => ({}),
});

export const authenticatedApiConfig = createApi({
  reducerPath: "authenticatedApiConfig",
  baseQuery: baseQueryWithReauth(baseQuery),
  endpoints: () => ({}),
});
