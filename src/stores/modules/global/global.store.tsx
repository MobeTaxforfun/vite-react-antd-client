import { IGlobalState } from "@/stores/data/store.d";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const globalState: IGlobalState = {
    token: "",
    userInfo: "",
}

const globalSlice = createSlice({
    name: 'global',
    initialState: globalState,
    reducers: {
        setToken: (state, action: PayloadAction<Partial<string>>) => {
            state.token = action.payload
        }
    }
});

export const { setToken } = globalSlice.actions;

export default globalSlice.reducer