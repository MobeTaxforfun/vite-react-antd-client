
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import globalReducer from '@/stores/modules/global/global.store';
import { deflate } from "zlib";

const rootReducer = combineReducers({
    global: globalReducer
});

const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store