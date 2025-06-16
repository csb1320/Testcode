import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../components/Counter";
import { expect, test } from "vitest";
import "@testing-library/jest-dom";

test("increments count", () => {
  render(<Counter />);
  fireEvent.click(screen.getByText(/increment/i));
  expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
});
