import { create } from "zustand";
import todoApi from "../api/todoApi";

const useTodoStore = create((set) => ({
  todos: [],
  actionFetchTodos: async (token) => {
    const res = await todoApi.getTodos(token);
    set({ todos: res.data.todos });
  },
  actionCreateTodo: async (input, token) => {
    const res = await todoApi.createTodo(input, token);
    set({
      todos: (prev) => [res.data.todo, ...prev.todos],
    });
  },
  actionDelete: async (id, token) => {
    await todoApi.deleteTodo(id, token);
    set((prev) => ({ todos: prev.todos.filter((item) => item.id !== id) }));
  },
  actionUpdate: async (id, input, token) => {
    const res = await todoApi.updateTodo(id, input, token);
    set((prev) => ({
      todos: prev.todos.map((item) => (item.id === id ? res.data.todo : item)),
    }));
  },
}));

export default useTodoStore;
