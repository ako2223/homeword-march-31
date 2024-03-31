import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../../App";

function AddTodo({ getTodos }) {
  const [value, setValue] = useState("");
  const addTodo = async () => {
    const data = {
      userId: 1,
      title: value,
      completed: false,
    };
    try {
      await axios.post(`${BASE_URL}/todos`, data);
      getTodos();
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <div>
      <input
        onChange={(e) => setValue(e.target.value)}
        defaultValue={value}
        type="text"
      />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}

export default AddTodo;
