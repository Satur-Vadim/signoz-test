import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import IUserResponse from '../interfaces/IUserResponse';
import IUserRequest from '../interfaces/IUserRequest';

const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API,
  }),
  endpoints: (builder) => ({
    login: builder.mutation<IUserResponse, Partial<IUserRequest>>({
      query: (user) => ({
        url: '/auth/login',
        method: 'POST',
        body: user,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
export default authApi;
