import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from "./reducers/tasksReducer"
export const store:any = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;