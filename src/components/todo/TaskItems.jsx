import React from "react";
import { useContext } from "react";
import { FaInfoCircle, FaCalendarAlt, FaCheck, FaTimes } from "react-icons/fa";
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
    const newTasks = taskItems.filter((t) => t.id !== id);
    setTaskItems(newTasks);
  };

  const formatDate = (dateString) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const isOverdue = (dateString, isDone) => {
    if (!dateString || isDone) return false;
    return new Date(dateString) < new Date();
  };

  if (taskItems.length) {
    return (
      <section className="px-4 py-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {taskItems.map((task) => {
            const dueDate = formatDate(task.dueDate);
            const overdue = isOverdue(task.dueDate, task.isDone);

            return (
              <div
                key={task.id}
                className={`bg-white rounded-lg border-2 shadow-sm p-5 transition-all duration-200 hover:shadow-md ${
                  task.isDone
                    ? "border-green-200 bg-green-50"
                    : overdue
                    ? "border-red-200"
                    : "border-gray-200"
                }`}
              >
                {/* Task Header */}
                <div className="flex items-start justify-between mb-3">
                  <h3
                    className={`text-lg font-semibold text-gray-800 flex-1 ${
                      task.isDone ? "line-through text-gray-500" : ""
                    }`}
                  >
                    {task.title}
                  </h3>
                  <div className="flex items-center gap-2 ml-2">
                    <button
                      onClick={() => handleChangeDone(task.id)}
                      className={`p-2 rounded-full transition-colors ${
                        task.isDone
                          ? "bg-green-100 text-green-600 hover:bg-green-200"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                      aria-label={task.isDone ? "Mark as incomplete" : "Mark as complete"}
                    >
                      {task.isDone ? (
                        <FaCheck size={14} />
                      ) : (
                        <FaTimes size={14} />
                      )}
                    </button>
                    <button
                      onClick={() => handleDelete(task.id)}
                      className="p-2 rounded-full bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
                      aria-label="Delete task"
                    >
                      <MdDelete size={16} />
                    </button>
                  </div>
                </div>

                {/* Description */}
                {task.description && (
                  <p
                    className={`text-sm text-gray-600 mb-3 ${
                      task.isDone ? "line-through text-gray-400" : ""
                    }`}
                  >
                    {task.description}
                  </p>
                )}

                {/* Due Date */}
                {dueDate && (
                  <div
                    className={`flex items-center gap-2 text-sm mt-3 pt-3 border-t border-gray-100 ${
                      overdue && !task.isDone
                        ? "text-red-600 font-medium"
                        : task.isDone
                        ? "text-gray-400"
                        : "text-gray-500"
                    }`}
                  >
                    <FaCalendarAlt size={12} />
                    <span>
                      {overdue && !task.isDone ? `Overdue: ${dueDate}` : dueDate}
                    </span>
                  </div>
                )}

                {/* Status Badge */}
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <span
                    className={`inline-block px-2 py-1 text-xs font-medium rounded ${
                      task.isDone
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {task.isDone ? "Completed" : "Pending"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return (
      <div className="w-full h-[60vh] flex flex-col items-center justify-center text-gray-400">
        <FaInfoCircle size="3rem" className="mb-4" />
        <p className="text-lg font-medium text-gray-500">
          No tasks yet. Add one above to get started!
        </p>
      </div>
    );
  }
}
