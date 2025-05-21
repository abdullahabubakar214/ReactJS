import { configureStore } from "@reduxjs/toolkit";
import todoReduser from "../feactures/todos/todoSlice";
export const store = configureStore({
  reducer: todoReduser,
});
