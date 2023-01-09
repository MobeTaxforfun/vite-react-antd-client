
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import globalReducer from '@/stores/modules/global/global.store';
import layoutReducer from '@/stores/modules/layout/layout.store';

const rootReducer = combineReducers({
    global: globalReducer,
    layout: layoutReducer
});

const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store