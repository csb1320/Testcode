import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../ui/Login";
import { expect, test, vi } from "vitest";
import "@testing-library/jest-dom";

test("로그인 버튼 클릭 시 onLogin 함수가 호출된다", () => {
  const mockLogin = vi.fn();
  render(<Login onLogin={mockLogin} />);
  
  fireEvent.click(screen.getByText("로그인"));
  
  expect(mockLogin).toHaveBeenCalled();
});