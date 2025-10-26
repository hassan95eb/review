import { createContext } from "react";

export const taskContext =
  createContext({
    taskitems: [],
    setTaskItems: () => {},
  });
