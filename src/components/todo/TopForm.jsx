import React from "react";
import { useContext } from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { taskContext } from "../../taskContext";

export default function TopForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(null);

  const { taskItems, setTaskItems } = useContext(taskContext);

  const handleSaveTask = (e) => {
    e.preventDefault();
    if (!title.trim()) return; // Don't add empty tasks

    const newTask = {
      id: Math.random(),
      title: title.trim(),
      description: description.trim(),
      dueDate: dueDate ? dueDate.toISOString() : null,
      isDone: false,
    };

    setTaskItems([...taskItems, newTask]);
    setTitle("");
    setDescription("");
    setDueDate(null);
  };

  return (
    <>
      <h1 className="text-center text-4xl font-bold mb-8 text-gray-800">
        Todo List
      </h1>
      <section className="px-4 py-4 max-w-2xl mx-auto">
        <form
          className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-4"
          onSubmit={handleSaveTask}
        >
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Title <span className="text-red-500">*</span>
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter task title"
              required
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter task description (optional)"
              rows="3"
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
          </div>

          <div>
            <label
              htmlFor="dueDate"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Due Date
            </label>
            <DatePicker
              id="dueDate"
              selected={dueDate}
              onChange={(date) => setDueDate(date)}
              placeholderText="Select due date (optional)"
              dateFormat="MMM dd, yyyy"
              minDate={new Date()}
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              wrapperClassName="w-full"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 font-medium"
          >
            Add Task
          </button>
        </form>
      </section>
    </>
  );
}
