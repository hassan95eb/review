import React from "react";

export default function DateTimer() {
  const date = new Date();
  return (
    <div className="flex w-36 justify-between mb-4">
      <span className="text-white bg-black px-1 rounded text-2xl select-none">
        {date.getFullYear()}
      </span>
      <span className="text-white bg-black px-1 rounded text-2xl select-none">
        {date.getMonth() + 1}
      </span>
      <span className="text-white bg-black px-1 rounded text-2xl select-none">
        {date.getDate()}
      </span>
    </div>
  );
}
