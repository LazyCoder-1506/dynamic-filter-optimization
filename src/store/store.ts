import { configureStore } from "@reduxjs/toolkit";
// import dataReducer from './slices/dataSlice';
// import mod350Reducer from './slices/mod350Slice';
// import mod8000Reducer from './slices/mod8000Slice';
// import mod20002Reducer from './slices/mod20002Slice';
import globalReducer from './slice';

const store = configureStore({
  reducer: {
    global: globalReducer
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;