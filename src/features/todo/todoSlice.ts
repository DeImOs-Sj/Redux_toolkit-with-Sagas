import { createSlice, nanoid } from "@reduxjs/toolkit";
import { act } from "react";

interface Todo {
  name: string;
  text: string;
  id: number;
}

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [{ id: 1, text: "hello world" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state: any, action: any) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => {
        todo.id !== action.payload;
      });
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
