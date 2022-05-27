import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist";
//@ts-ignore
import persistStore from "redux-persist/es/persistStore";
import { rootReducer } from "./rootReducer";

export const store = configureStore({
    reducer: rootReducer
})

export const persistor = persistStore(store)

export const purgeState = () => {
    persistor.purge()
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch