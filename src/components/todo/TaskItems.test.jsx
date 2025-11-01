import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TaskItems from "./TaskItems";
import { taskContext } from "../../taskContext";

describe("TaskItems", () => {
  const mockSetTaskItems = vi.fn();

  const mockTasks = [
    {
      id: 1,
      title: "Task 1",
      description: "Description 1",
      dueDate: new Date(Date.now() + 86400000).toISOString(),
      isDone: false,
    },
    {
      id: 2,
      title: "Task 2",
      description: null,
      dueDate: null,
      isDone: true,
    },
  ];

  const renderWithContext = (tasks) => {
    return render(
      <taskContext.Provider
        value={{
          taskItems: tasks,
          setTaskItems: mockSetTaskItems,
        }}
      >
        <TaskItems />
      </taskContext.Provider>
    );
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders empty state when no tasks", () => {
    renderWithContext([]);

    expect(
      screen.getByText(/no tasks yet. add one above to get started!/i)
    ).toBeInTheDocument();
  });

  it("renders all tasks", () => {
    renderWithContext(mockTasks);

    expect(screen.getByText("Task 1")).toBeInTheDocument();
    expect(screen.getByText("Task 2")).toBeInTheDocument();
  });

  it("displays task descriptions when available", () => {
    renderWithContext(mockTasks);

    expect(screen.getByText("Description 1")).toBeInTheDocument();
  });

  it("displays completion status", () => {
    renderWithContext(mockTasks);

    expect(screen.getByText("Completed")).toBeInTheDocument();
    expect(screen.getByText("Pending")).toBeInTheDocument();
  });

  it("allows toggling task completion status", async () => {
    const user = userEvent.setup();
    renderWithContext(mockTasks);

    const toggleButtons = screen.getAllByLabelText(/mark as/i);
    await user.click(toggleButtons[0]);

    expect(mockSetTaskItems).toHaveBeenCalled();
  });

  it("allows deleting a task", async () => {
    const user = userEvent.setup();
    renderWithContext(mockTasks);

    const deleteButtons = screen.getAllByLabelText(/delete task/i);
    await user.click(deleteButtons[0]);

    expect(mockSetTaskItems).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({
          id: 2,
        }),
      ])
    );
  });

  it("displays due date when available", () => {
    renderWithContext(mockTasks);

    // Check if date is displayed (format may vary)
    const dateElements = screen.getAllByText(/\w{3} \d{1,2}, \d{4}/);
    expect(dateElements.length).toBeGreaterThan(0);
  });
});

