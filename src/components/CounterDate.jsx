import React from "react";
import { useState } from "react";

export default function CounterDate() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(1);
  const date = new Date("june 21 2027");

  return (
    <div className="flex flex-col justify-center w-full h-screen">
      <div className="mx-auto flex my-1">
        <button
          className="px-2 bg-red-600 text-white rounded cursor-pointer mr-1"
          onClick={() =>
            setStep((s) => s - 1)
          }
        >
          -
        </button>
        <span className="text-black select-none w-24 text-center">
          Step : {step}
        </span>
        <button
          className="px-2 bg-green-600 text-white rounded cursor-pointer ml-1"
          onClick={() =>
            setStep((s) => s + 1)
          }
        >
          +
        </button>
      </div>
      <div className="mx-auto flex my-1">
        <button
          className="px-2 bg-red-600 text-white rounded cursor-pointer mr-1"
          onClick={() =>
            setCount((s) => s - 1)
          }
        >
          -
        </button>
        <span className="text-black select-none w-24 text-center">
          count : {count}
        </span>
        <button
          className="px-2 bg-green-600 text-white rounded cursor-pointer ml-1"
          onClick={() =>
            setCount((s) => s + step)
          }
        >
          +
        </button>
      </div>
      <div>{date}</div>
    </div>
  );
}
