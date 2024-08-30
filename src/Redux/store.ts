import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { baseApi } from "./Api/baseApi";
import authReducer from "./Features/Auth/AuthSlice";

// Define the persist configuration for the auth slice
const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["user"], // specify which part of the auth state you want to persist, if needed
};

// Create a persisted reducer using the persistConfig
const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: persistedAuthReducer, // use the persisted auth reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // necessary to avoid warnings/errors with redux-persist
    }).concat(baseApi.middleware),
});

// Set up persistor for the store
export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
