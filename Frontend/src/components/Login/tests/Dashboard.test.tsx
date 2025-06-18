import { render, screen } from "@testing-library/react";
import Dashboard from "../pages/Dashboard";
import { expect, test, beforeEach } from "vitest";
import "@testing-library/jest-dom";
import { useAuthStore } from "../store/useAuthStore";

// 매 테스트 전에 user 세팅
beforeEach(() => {
  useAuthStore.setState({
    user: {
      id: 1,
      name: "조성빈",
    },
  });
});

test("대시보드 문구가 정상 출력된다", () => {
  render(<Dashboard />);
  expect(
    screen.getByText(/조성빈님! 대시보드에 오신 것을 환영합니다!/i)
  ).toBeInTheDocument();
});
