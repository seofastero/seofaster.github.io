import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://635555bbda523ceadcff89cf.mockapi.io",
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "product/",
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;
