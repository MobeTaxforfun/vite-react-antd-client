import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IState {
    theme: 'light' | 'dark';
    loading: boolean;
}

//檢查瀏覽器狀態是否為 夜間模式
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const userTheme = localStorage.getItem('theme') as IState['theme'];

const initialState: IState = {
    theme: userTheme || systemTheme,
    loading: false,
  };

  const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
      setGlobalState(state, action: PayloadAction<Partial<IState>>) {
        Object.assign(state, action.payload);
  
        if (action.payload.theme) {
          const body = document.body;
  
          if (action.payload.theme === 'dark') {
            if (!body.hasAttribute('theme-mode')) {
              body.setAttribute('theme-mode', 'dark');
            }
          } else {
            if (body.hasAttribute('theme-mode')) {
              body.removeAttribute('theme-mode');
            }
          }
        }
      },
    },
  });
  
  export const { setGlobalState } = globalSlice.actions;
  
  export default globalSlice.reducer;