import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './slices/task-slice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  }
})