import React from "react";
import { useContext } from "react";
import {
  FaCheck,
  FaRegEdit,
  FaTimes,
} from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { taskContext } from "../../taskContext";

export default function TaskItems() {
  const { taskItems, setTaskItems } =
    useContext(taskContext);
  return (
    <>
      <section className="px-2 py-2 w-3/4 mx-auto">
        <ul className="w-full grid grid-cols-12 gap-2">
          {taskItems.map((t) => {
            return (
              <li className="col-span-6 md:col-span-4 lg:col-span-3">
                <div className="h-[140px] w-3/4 bg-blue-950 px-2 py-2 rounded-sm text-white flex flex-col justify-between items-center relative">
                  <h2 className="font-bold text-center">
                    {t.title}
                  </h2>
                  <div className="flex justify-end w-full">
                    <span className="cursor-pointer mr-3">
                      <MdDelete />
                    </span>
                    <span className="cursor-pointer ">
                      <FaCheck />
                    </span>
                    <span className="cursor-pointer ">
                      <FaTimes />
                    </span>
                  </div>
                  <span className="absolute top-1 right-1 cursor pointer">
                    <FaRegEdit />
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
