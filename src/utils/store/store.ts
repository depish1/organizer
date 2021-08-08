import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/reducer';
import menuReducer from './menu/reducer';
import loaderReducer from './loader/reducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    menu: menuReducer,
    loader: loaderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
