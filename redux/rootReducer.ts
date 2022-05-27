import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers } from "@reduxjs/toolkit";
//@ts-ignore
import persistReducer from "redux-persist/es/persistReducer";
import moneyReducer from './money/moneySlice';

const reducers = combineReducers({
    money: moneyReducer
})

const persistConfig = {
    key: 'root',
    version: 1,
    storage: AsyncStorage,
    whiteList: []
}

export const rootReducer = persistReducer(persistConfig, reducers)