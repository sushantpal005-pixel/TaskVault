import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodos: (state, action) => {
        state.todos = action.payload
    },
    updateTodo: (state, action) => {
        const index = state.todos.findIndex(
            (todo) => todo._id === action.payload._id
        )
        if(index !== -1){
            state.todos[index] = action.payload
        }
    },
    deleteTodo: (state, action) => {
        state.todos = state.todos.filter(
            (todo) => todo._id !== action.payload
        )
    }
  },
});

export const { setTodos, updateTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;