import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/reducer';
import tasksReducer from './tasks/reducer';
import menuReducer from './menu/reducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    tasks: tasksReducer,
    menu: menuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
