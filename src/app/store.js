import { configureStore } from "@reduxjs/toolkit";
import filterSliceReducer from "../features/filterSlice";
import { apiSlice } from './../features/api/apiSlice';

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        filters: filterSliceReducer
    },
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(apiSlice.middleware),
})
