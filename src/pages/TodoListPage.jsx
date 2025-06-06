import React from "react";
import { useState } from "react";
import { schemaTodo } from "../validator/schemaTodo";
import * as Yup from "yup";
import useTodoStore from "../stores/todoStore";
import useAuthStore from "../stores/authStore";
import { toast } from "react-toastify";

const initialInput = {
  taskName: "",
};

function TodoListPage() {

  const actionCreateTodo = useTodoStore( state => state.actionCreateTodo)
  const token = useAuthStore( state => state.accessToken)

  const [input, setInput] = useState(initialInput);
  const [inputError, setInputError] = useState(initialInput);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      schemaTodo.validateSync(input, { abortEarly: false });
      await actionCreateTodo(input, token)
      toast.success("Create Task Success")
    } catch (error) {
      console.log(error);
      toast.error("Create Task Fail")

      if (error instanceof Yup.ValidationError) {
        const err = error.inner.reduce((acc, cur) => {
          acc[cur.path] = cur.message;
          return acc;
        }, {});
        setInputError()
      }
    }
  };

  return (
    <div className="grid place-items-center h-screen">
      <form onSubmit={handleSubmit}>
        <input className="bg-blue-600" name="taskName" type="text" />
        {inputError.taskName && (
          <p className="text-red-500 text-xs">{inputError.taskName}</p>
        )}
      </form>
    </div>
  );
}

export default TodoListPage;
