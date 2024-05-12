import {
  asyncThunkCreator,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import counterSlice from "../../features/storeFetchData";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import experimentSlice from "../../features/experimentSlice";
import { encryptionTransform } from "../transformation/SequrePersist.trans";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["notes"],
  transforms: [encryptionTransform],
};

const rootReducer = combineReducers({
  incrementor: counterSlice,
  notes: experimentSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const storeRedux = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(storeRedux);
