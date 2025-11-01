import React from "react";
import TopForm from "./TopForm";
import TaskItems from "./TaskItems";
import { useState } from "react";
import { taskContext as TaskContext } from "../../taskContext";

export default function Todo() {
  const [taskItems, setTaskItems] = useState([
    {
      id: 1,
      title: "Sample Task 1",
      description: "This is a sample task with a description",
      dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
      isDone: false,
    },
    {
      id: 2,
      title: "Sample Task 2",
      description: "This task is already completed",
      dueDate: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString(),
      isDone: true,
    },
    {
      id: 3,
      title: "Sample Task 3",
      description: null,
      dueDate: null,
      isDone: false,
    },
  ]);
  return (
    <TaskContext.Provider
      value={{
        taskItems,
        setTaskItems,
      }}
    >
      <div className="container mx-auto">
        <TopForm />
        <TaskItems />
      </div>
    </TaskContext.Provider>
  );
}
