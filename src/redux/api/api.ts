// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://rettro-type-server.vercel.app/api/v1",
  }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    // Get all products
    getProducts: builder.query({
      query: (queries) => {
        const params = new URLSearchParams(queries).toString();
        return {
          url: `/products?${params}`,
          method: "GET",
        };
      },
      providesTags: ["Products"],
    }),

    // Get Single product
    getProduct: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
      providesTags: ["Products"],
    }),

    // Add product
    addProduct: builder.mutation({
      query: (data) => ({
        url: "/products/add-product",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Products"],
    }),

    // Update product
    updateProduct: builder.mutation({
      query: ({ id, data }) => ({
        url: `/products/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Products"],
    }),

    // Delete product
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Products"],
    }),

    // order product
    addOrder: builder.mutation({
      query: (data) => ({
        url: "/orders/create-order",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Products"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetProductsQuery,
  useGetProductQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useAddOrderMutation,
} = baseApi;
