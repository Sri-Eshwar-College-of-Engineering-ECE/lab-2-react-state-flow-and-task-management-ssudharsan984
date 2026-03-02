import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push({ id: Date.now(), title: action.payload, status: 'pending' });
    },
    updateTask: (state, action) => {
      const task = state.find(t => t.id === action.payload.id);
      if (task) Object.assign(task, action.payload.updates);
    },
    deleteTask: (state, action) => {
      return state.filter(t => t.id !== action.payload);
    }
  }
});

export const { addTask, updateTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
