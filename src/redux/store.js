import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Importando o storage do redux-persist
import patientSlice from "./patient/patientSlice";

const rootReducer = combineReducers({
  patient: patientSlice,
});

const persistConfig = {
  key: "root",
  storage, // Definindo o storage para persistência
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
