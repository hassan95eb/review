import React from "react";
import TopForm from "./TopForm";
import TaskItems from "./TaskItems";
import { useState } from "react";
import { taskContext as TaskContext } from "../../taskContext";

export default function Todo() {
  const [taskItems, setTaskItems] = useState([
    {
      id: 1,
      title: "task1",
      isDone: false,
    },
    {
      id: 2,
      title: "task2",
      isDone: true,
    },
    {
      id: 3,
      title: "task3",
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
      <div className="container mx-auto mt-10">
        <TopForm />
        <TaskItems />
      </div>
    </TaskContext.Provider>
  );
}
