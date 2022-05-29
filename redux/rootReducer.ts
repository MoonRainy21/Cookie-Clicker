import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import moneyReducer from './money/moneySlice';
import levelReducer from './levelSlice'

const reducers = combineReducers({
    money: moneyReducer,
    level: levelReducer
})

const persistConfig = {
    key: 'root',
    version: 1,
    storage: AsyncStorage,
    whiteList: []
}

export const rootReducer = persistReducer(persistConfig, reducers)