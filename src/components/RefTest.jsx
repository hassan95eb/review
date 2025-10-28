import React from "react";
import { memo } from "react";
import { useRef } from "react";
import { useState } from "react";
let counter = 0;

function RefTest() {
  const [name, setName] = useState("");
  const myInput = useRef();
  const handleChangeName = () => {
    setName(myInput.current.value);
  };
  return (
    <div>
      <h1>this is useRef Test</h1>
      <div className="flex items-center justify-center">
        <input
          type="text"
          ref={myInput}
          placeholder="Write your task"
          className="w-96 border mr-2 py-1 border-gray-300 px-2 rounded focus:outline-none focus-visible:outline-none focus:ring-2 focus:ring-blue-300  cursor-text font-bold"
        />
        <button
          className="bg-green-600 text-white px-2 py-1 rounded cursor-pointer hover:bg-green-800"
          onClick={handleChangeName}
        >
          Add
        </button>
        <div>{counter++}</div>
      </div>
    </div>
  );
}
export default memo(RefTest);
