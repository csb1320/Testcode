import { render, screen } from "@testing-library/react";
import Dashboard from "../ui/Dashboard";
import { expect, test } from "vitest";
import "@testing-library/jest-dom";

test("대시보드 문구가 정상 출력된다", () => {
  render(<Dashboard />);
  expect(screen.getByText(/대시보드에 오신 것을 환영합니다/)).toBeInTheDocument();
});