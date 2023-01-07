import { IGlobalState, IThemeConfig } from "@/stores/data/store.d";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const globalState: IGlobalState = {
    token: "",
    userInfo: "",
    themeConfig: {
        theme : 'default'
    }
}

const globalSlice = createSlice({
    name: 'global',
    initialState: globalState,
    reducers: {
        setStoreToken: (state, action: PayloadAction<Partial<string>>) => {
            state.token = action.payload
        },
        setStoreTheme:(state, action:PayloadAction<IThemeConfig>)=>{
            state.themeConfig = action.payload
        }
    }
});

export const { setStoreToken,setStoreTheme } = globalSlice.actions;
export default globalSlice.reducer