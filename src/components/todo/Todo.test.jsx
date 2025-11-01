import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Todo from "./Todo";

describe("Todo", () => {
  it("renders the Todo component with form and task items", () => {
    render(<Todo />);

    expect(screen.getByText("Todo List")).toBeInTheDocument();
    expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
  });

  it("displays sample tasks on initial load", () => {
    render(<Todo />);

    const sampleTasks = screen.getAllByText(/sample task/i);
    expect(sampleTasks.length).toBeGreaterThan(0);
  });

  it("provides task context to child components", () => {
    render(<Todo />);

    // Verify that components consuming context can render
    expect(screen.getByRole("button", { name: /add task/i })).toBeInTheDocument();
  });
});

