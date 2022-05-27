import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface MoneyState {
    cookie: number
}

const initialState: MoneyState = {
    cookie: 0
}

export const moneySlice = createSlice({
    name: 'money',
    initialState,
    reducers: {
        earn: (state, action: PayloadAction<number>) => {
            state.cookie += action.payload
        }
    }
})

export const { earn } = moneySlice.actions

export const selectCookie = (state: RootState) => state.money.cookie

export default moneySlice.reducer