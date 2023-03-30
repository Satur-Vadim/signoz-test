import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import jokes from './slices/jokes/slice';
import jokesApi from './slices/jokes/apis/jokes';
import authApi from './slices/user/apis/auth';
import translates from './slices/translates/slice';

const store = configureStore({
  reducer: {
    jokes,
    translates,
    [jokesApi.reducerPath]: jokesApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(jokesApi.middleware)
    .concat(authApi.middleware),
});

setupListeners(store.dispatch);

export default store;
