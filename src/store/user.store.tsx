import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';
import { IUserState } from '@/interface/user/user';
import { getGlobalState } from '@/utils/getGloabal';

const initialState:IUserState = {
    ...getGlobalState(),
    userName : 'DemoUser'
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      setUserItem(state, action: PayloadAction<Partial<IUserState>>) {
        const { userName } = action.payload;
        Object.assign(state, action.payload);
      }
    },
  });

export const { setUserItem } = userSlice.actions;
export default userSlice.reducer;