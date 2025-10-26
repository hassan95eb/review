import React from "react";

export default function TopForm() {
  return (
    <>
      <h1 className="text-center text-4xl font-bold">
        Todo List
      </h1>
      <section className="px-2 py-2">
        <form className="flex items-center justify-center">
          <input
            type="text"
            placeholder="Write your task"
            className="w-96 border mr-2 py-1 border-gray-300 px-2 rounded focus:outline-none focus-visible:outline-none focus:ring-2 focus:ring-blue-300  cursor-text font-bold"
          />

          <button className="bg-green-600 text-white px-2 py-1 rounded cursor-pointer hover:bg-green-800">
            Add
          </button>
        </form>
      </section>
    </>
  );
}
