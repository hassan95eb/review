import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TopForm from "./TopForm";
import { taskContext } from "../../taskContext";

describe("TopForm", () => {
  const mockSetTaskItems = vi.fn();
  const mockTaskItems = [];

  const renderWithContext = (component) => {
    return render(
      <taskContext.Provider
        value={{
          taskItems: mockTaskItems,
          setTaskItems: mockSetTaskItems,
        }}
      >
        {component}
      </taskContext.Provider>
    );
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the form with all fields", () => {
    renderWithContext(<TopForm />);

    expect(screen.getByText("Todo List")).toBeInTheDocument();
    expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/description/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/due date/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /add task/i })).toBeInTheDocument();
  });

  it("allows user to input title", async () => {
    const user = userEvent.setup();
    renderWithContext(<TopForm />);

    const titleInput = screen.getByLabelText(/title/i);
    await user.type(titleInput, "New Task");

    expect(titleInput).toHaveValue("New Task");
  });

  it("allows user to input description", async () => {
    const user = userEvent.setup();
    renderWithContext(<TopForm />);

    const descriptionInput = screen.getByLabelText(/description/i);
    await user.type(descriptionInput, "Task description");

    expect(descriptionInput).toHaveValue("Task description");
  });

  it("creates a task when form is submitted with title", async () => {
    const user = userEvent.setup();
    renderWithContext(<TopForm />);

    const titleInput = screen.getByLabelText(/title/i);
    const submitButton = screen.getByRole("button", { name: /add task/i });

    await user.type(titleInput, "Test Task");
    await user.click(submitButton);

    await waitFor(() => {
      expect(mockSetTaskItems).toHaveBeenCalledTimes(1);
    });

    const calledWith = mockSetTaskItems.mock.calls[0][0];
    expect(calledWith).toHaveLength(1);
    expect(calledWith[0]).toMatchObject({
      title: "Test Task",
      description: "",
      isDone: false,
    });
  });

  it("does not create a task if title is empty", async () => {
    const user = userEvent.setup();
    renderWithContext(<TopForm />);

    const submitButton = screen.getByRole("button", { name: /add task/i });
    await user.click(submitButton);

    await waitFor(() => {
      expect(mockSetTaskItems).not.toHaveBeenCalled();
    });
  });

  it("clears form after successful submission", async () => {
    const user = userEvent.setup();
    renderWithContext(<TopForm />);

    const titleInput = screen.getByLabelText(/title/i);
    const descriptionInput = screen.getByLabelText(/description/i);
    const submitButton = screen.getByRole("button", { name: /add task/i });

    await user.type(titleInput, "Test Task");
    await user.type(descriptionInput, "Description");
    await user.click(submitButton);

    await waitFor(() => {
      expect(titleInput).toHaveValue("");
      expect(descriptionInput).toHaveValue("");
    });
  });
});

