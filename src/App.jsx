import React from "react";
import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  const message = [
    "first Step",
    "second Step",
    "third Step",
  ];
  const handleCLickdecrease = () => {
    setStep(step - 1);
  };
  const handleCLickIncrease = () => {
    setStep(step + 1);
  };
  return (
    <div className="w-full h-screen flex justify-center items-center ">
      <div className="w-96 border border-gray-500 rounded px-2 py-1 box-border">
        <h2 className="text-2xl text-center">
          wizard
        </h2>
        <hr />
        <div className="flex justify-between items-center px-2 py-2">
          <span
            className={`rounded-[50%] px-2 border ${
              step == 1
                ? "bg-blue-500 text-white"
                : ""
            }`}
          >
            1
          </span>
          <span
            className={`rounded-[50%] px-2 border ${
              step == 2
                ? "bg-blue-500 text-white"
                : ""
            }`}
          >
            2
          </span>
          <span
            className={`rounded-[50%] px-2 border ${
              step == 3
                ? "bg-blue-500 text-white"
                : ""
            }`}
          >
            3
          </span>
        </div>
        <div className="my-2 text-center">
          Step{step} :{" "}
          {message[step - 1]}
        </div>
        <div className="flex justify-between items-center px-2 py-1">
          {step > 1 && (
            <span
              className="border border-gray-400 rounded-[50%]  hover:border-gray-900"
              onClick={
                handleCLickdecrease
              }
            >
              <svg
                className="rounded-[50%]"
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="24"
                  height="24"
                  fill="white"
                />
                <path
                  d="M14.5 17L9.5 12L14.5 7"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          )}
          {step < 3 && (
            <span
              className="border border-gray-400 rounded-[50%] hover:border-gray-900 "
              onClick={
                handleCLickIncrease
              }
            >
              <svg
                className="rounded-[50%] hover:text-black"
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="24"
                  height="24"
                  fill="white"
                />
                <path
                  d="M9.5 7L14.5 12L9.5 17"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
