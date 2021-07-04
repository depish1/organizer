import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/reducer';
import tasksReducer from './tasks/reducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    tasks: tasksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
