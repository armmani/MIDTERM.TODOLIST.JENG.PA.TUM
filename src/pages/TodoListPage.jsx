import React from "react";
import { useState } from "react";
import { schemaTodo } from "../validator/schemaTodo";
import * as Yup from "yup";
import useTodoStore from "../stores/todoStore";
import useAuthStore from "../stores/authStore";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { X } from "lucide-react";

const initialInput = {
  taskName: "",
};

function TodoListPage() {
  const todos = useTodoStore((state) => state.todos);
  const actionCreateTodo = useTodoStore((state) => state.actionCreateTodo);
  const actionFetchTodos = useTodoStore((state) => state.actionFetchTodos);
  const actionDelete = useTodoStore((state) => state.actionDelete);
  const actionUpdate = useTodoStore((state) => state.actionUpdate);

  const token = useAuthStore((state) => state.accessToken);
  const userId = useAuthStore((state) => state.userId);

  useEffect(() => {
    actionFetchTodos(token);
  }, []);

  const [input, setInput] = useState(initialInput);
  const [inputError, setInputError] = useState(initialInput);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      schemaTodo.validateSync(input, { abortEarly: false });
      const dataTodo = {
        taskName: input.taskName,
        userId: userId,
      };
      console.log(dataTodo);
      await actionCreateTodo(dataTodo, token);
      setInput(initialInput);
      toast.success("Create Task Success");
    } catch (error) {
      console.log(error);
      toast.error("Create Task Fail");

      if (error instanceof Yup.ValidationError) {
        const err = error.inner.reduce((acc, cur) => {
          acc[cur.path] = cur.message;
          return acc;
        }, {});
        setInputError(err);
      }
    }
  };

  const handleUpdate = async (e, item) => {
    try {
    const dataUpdate = {
      taskName: item.taskName,
      completed: e.target.checked
    }
    await actionUpdate(item.id, dataUpdate, token);
    toast.success("UPDATE SUCCESS")
  } catch (error) {
    toast.error("UPDATE FAIL")
    console.log(error)
  }
}
  return (
    <div className="grid place-items-center h-screen">
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setInput({ taskName: e.target.value })}
          value={input.taskName}
          className="bg-blue-600"
          name="taskName"
          type="text"
        />
        {inputError.taskName && (
          <p className="text-red-500 text-xs">{inputError.taskName}</p>
        )}
      </form>
      {todos.map((item) => (
        <div className="bg-amber-800 flex" key={item.id}>
          <input onChange={(e) => handleUpdate(e, item)} type="checkbox" />
          <p className={`${item.completed ? "line-through text-gray-400" : ""}`}>{item.taskName}</p>
          <X onClick={() => actionDelete(item.id, token)} />
        </div>
      ))}
    </div>
  );
}

export default TodoListPage;
