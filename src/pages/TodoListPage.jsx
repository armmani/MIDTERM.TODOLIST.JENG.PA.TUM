import React from "react";
import { useState } from "react";
import { schemaTodo } from "../validator/schemaTodo";
import * as Yup from "yup";

const initialInput = {
  taskName: "",
};

function TodoListPage() {
  const [input, setInput] = useState(initialInput);
  const [inputError, setInputError] = useState(initialInput);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      schemaTodo.validateSync(input, { abortEarly: false });
    } catch (error) {
      console.log(error);
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
      <form>
        <input className="bg-blue-600" name="taskName" type="text" />
        {inputError.taskName && (
          <p className="text-red-500 text-xs">{inputError.taskName}</p>
        )}
      </form>
    </div>
  );
}

export default TodoListPage;
