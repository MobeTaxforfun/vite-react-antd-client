import { THEME } from "@/config/config";
import { IGlobalState, IAppThemeConfig } from "@/stores/data/store.d";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// 從 localStorage 中取得相關設定 (尚未實作)

const globalState: IGlobalState = {
    token: "",
    userInfo: "",
    appThemeConfig: {
        theme : THEME.LIGHT
    }
}

const globalSlice = createSlice({
    name: 'global',
    initialState: globalState,
    reducers: {
        setStoreToken: (state, action: PayloadAction<Partial<string>>) => {
            state.token = action.payload
        },
        setStoreTheme:(state, action:PayloadAction<IAppThemeConfig>)=>{
            state.appThemeConfig = action.payload
            const body = document.body;
            const {theme} = action.payload;
            switch(theme)
            {
                case THEME.DARK:
                    body.setAttribute('theme-mode', 'dark');
                    break;
                case THEME.LIGHT:
                    body.removeAttribute('theme-mode');
                    break;
            }
        }
    }
});

export const { setStoreToken,setStoreTheme } = globalSlice.actions;
export default globalSlice.reducer