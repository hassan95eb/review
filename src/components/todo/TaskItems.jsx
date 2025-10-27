import React from "react";
import { useContext } from "react";
import { FaCheck, FaInfoCircle, FaRegEdit, FaTimes } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { taskContext } from "../../taskContext";

export default function TaskItems() {
  const { taskItems, setTaskItems } = useContext(taskContext);

  const handleChangeDone = (id) => {
    const itemId = taskItems.findIndex((t) => t.id === id);
    let newTask = [...taskItems];
    newTask[itemId].isDone = !newTask[itemId].isDone;
    setTaskItems(newTask);
  };

  const handleDelete = (id) => {
    console.log(id, "id");
    const newTasks = [...taskItems];
    const index = newTasks.findIndex((t) => t.id === id);
    newTasks.splice(index, 1);
    setTaskItems(newTasks);
  };

  if (taskItems.length) {
    return (
      <>
        <section className="px-2 py-2 w-3/4 mx-auto">
          <ul className="w-full grid grid-cols-12 gap-2">
            {taskItems.map((t) => {
              return (
                <li className="col-span-6 md:col-span-4 lg:col-span-3">
                  <div className="h-[140px] w-3/4 bg-blue-950 px-2 py-2 rounded-sm text-white flex flex-col justify-between items-center relative">
                    <h2 className="font-bold text-center">{t.title}</h2>
                    <div className="flex justify-end w-full">
                      <span
                        className="cursor-pointer mr-3"
                        onClick={() => handleDelete(t.id)}
                      >
                        <MdDelete />
                      </span>
                      <span
                        className="cursor-pointer"
                        onClick={() => handleChangeDone(t.id)}
                      >
                        {t.isDone ? <FaTimes /> : <FaCheck />}
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
  } else {
    return (
      <p className="w-full h-[80vh] flex flex-col items-center justify-center">
        <FaInfoCircle size="2rem" />
        <p className="font-bold mt-2">There is nothing to show.</p>
      </p>
    );
  }
}
