import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3003/",
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "product/",
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;
