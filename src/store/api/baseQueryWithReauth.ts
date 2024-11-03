import { Encryption } from "@/utils/encryption";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type BaseQueryType = ReturnType<typeof fetchBaseQuery>;

export const baseQueryWithReauth: (baseQuery: BaseQueryType) => BaseQueryType =
  (baseQuery) => async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);

    return result;
  };

export const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_BASE_URL,
  prepareHeaders: (headers) => {
    try {
      const token = JSON.parse(
        Encryption.decrypt(
          sessionStorage.getItem(import.meta.env.VITE_TOKEN) as string
        )
      );
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    } catch (error) {
      throw new Error(JSON.stringify(error));
    }
  },
});
