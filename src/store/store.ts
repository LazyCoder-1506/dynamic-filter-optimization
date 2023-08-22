import { configureStore } from "@reduxjs/toolkit";
import dataReducer from './slices/dataSlice';
import mod350Reducer from './slices/mod350Slice';
import mod8000Reducer from './slices/mod8000Slice';
import mod20002Reducer from './slices/mod20002Slice';

const store = configureStore({
  reducer: {
    data: dataReducer,
    mod_350: mod350Reducer,
    mod_8000: mod8000Reducer,
    mod_20002: mod20002Reducer,
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;