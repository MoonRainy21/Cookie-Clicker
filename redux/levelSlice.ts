import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface LevelState {
    clickLevel: number[],
    secLevel: number[]
}

const initialState: LevelState = {
    clickLevel: [0, 0, 0, 0],
    secLevel: [0, 0, 0, 0, 0, 0, 0, 0]
}

export const levelSlice = createSlice({
    name: 'money',
    initialState,
    reducers: {
        clickLevelUp: (state, action: PayloadAction<number>) => {
            state.clickLevel[action.payload] += 1
        },
        secLevelUp: (state, action: PayloadAction<number>) => {
            state.secLevel[action.payload] += 1
        },
    }
})

export const { clickLevelUp, secLevelUp } = levelSlice.actions

export const selectClickLevel = (state: RootState) => state.level.clickLevel
export const selectSecLevel = (state: RootState) => state.level.secLevel

export default levelSlice.reducer