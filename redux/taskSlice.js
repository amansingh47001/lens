import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const tasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    taskAdded(state, action) {
      state.push({
        id: uuidv4(),
        title: action.payload.title,
        description: action.payload.description,
        priority: action.payload.priority,
        dueDate: action.payload.dueDate,
        location: action.payload.location,
      });
    },
    taskToggled(state, action) {
      const todo = state.find((todo) => todo.id === action.payload);
      todo.completed = !todo.completed;
    },
  },
});

export const { taskAdded, taskToggled } = tasksSlice.actions;
export default tasksSlice.reducer;
