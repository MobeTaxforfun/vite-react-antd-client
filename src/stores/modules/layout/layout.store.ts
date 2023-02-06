import { DEVICE } from "@/config/config";
import { ILayoutState } from "@/stores/data/store.d";
import { getGlobalDevice } from "@/utils/getGloabalUtil";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const layoutState: ILayoutState = {
  currentDevice: getGlobalDevice().device,
  collapsed: getGlobalDevice().collapsed,
};

const layoutSlice = createSlice({
  name: "layout",
  initialState: layoutState,
  reducers: {
    setStoreDevice: (state, action: PayloadAction<string>) => {
      switch (action.payload) {
        case DEVICE.DESKTOP:
          state.currentDevice = DEVICE.DESKTOP;
          break;
        case DEVICE.MOBILE:
          state.currentDevice = DEVICE.MOBILE;
          break;
      }
    },
    onChangeStoreCollapse: (state) => {
      state.collapsed = !state.collapsed;
    },
  },
});

export const { setStoreDevice, onChangeStoreCollapse } = layoutSlice.actions;
export default layoutSlice.reducer;
