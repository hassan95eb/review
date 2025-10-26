import React from "react";
import {
  FaCheck,
  FaRegEdit,
} from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function Todo() {
  return (
    <div className="container mx-auto mt-10 bg-gray-200">
      <h1 className="text-center text-4xl font-bold">
        Todo List
      </h1>
      <section className="px-2 py-2">
        <div className="flex items-center justify-center">
          <input
            type="text"
            placeholder="Write your task"
            className="w-96 border mr-2 py-1 border-gray-300 px-2 rounded focus:outline-none focus-visible:outline-none focus:ring-2 focus:ring-blue-300  cursor-text font-bold"
          />

          <button className="bg-green-600 text-white px-2 py-1 rounded cursor-pointer hover:bg-green-800">
            Add
          </button>
        </div>
      </section>
      <section className="px-2 py-2 w-3/4 mx-auto">
        <ul className="w-full grid grid-cols-12 gap-2">
          <li className="col-span-6 md:col-span-4 lg:col-span-3">
            <div className="h-[140px] w-3/4 bg-blue-950 px-2 py-2 rounded-sm text-white flex flex-col justify-between items-center relative">
              <h2 className="font-bold text-center">
                title of Todo
              </h2>
              <p className="py-2">
                description of Todo
              </p>
              <div className="flex justify-end w-full">
                <span className="cursor-pointer mr-3">
                  <MdDelete />
                </span>
                <span className="cursor-pointer ">
                  <FaCheck />
                </span>
              </div>
              <span className="absolute top-1 right-1 cursor pointer">
                <FaRegEdit />
              </span>
            </div>
          </li>
          <li></li>
          <li></li>
        </ul>
      </section>
    </div>
  );
}
