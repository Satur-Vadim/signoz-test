import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import IJokeResponse from '../interfaces/IJokeResponse';

const jokesApi = createApi({
  reducerPath: 'jokesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_JOKES,
  }),
  endpoints: (builder) => ({
    fetchJoke: builder.query<IJokeResponse, void>({
      query: () => ({
        url: '/random',
        method: 'GET',
      }),
    }),
  }),
});

export const { useFetchJokeQuery } = jokesApi;
export default jokesApi;
