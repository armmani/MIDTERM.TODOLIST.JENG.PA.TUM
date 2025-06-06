import React from 'react'
import { useState } from 'react'

const initialInput = {
  taskName: "",
}

function TodoListPage() {

  const [input, setInput] = useState(initialInput)
  const [inputError, setInputError] = useState(initialInput)

  const handleSubmit = async () => { }

  return (
    <div className='grid place-items-center h-screen'>
      <form>
        <input className='bg-blue-600' name='taskName' type="text" />
      </form>
    </div>
  )
}

export default TodoListPage