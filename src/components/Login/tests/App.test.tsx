//통합테스트

import { render, screen, fireEvent } from "@testing-library/react";
import App from "../ui/App";
import { beforeEach, expect, test } from "vitest";
import "@testing-library/jest-dom";
import { useAuthStore } from "../store/useAuthStore";

beforeEach(() => {
  // 테스트 시작 전에 항상 로그인 상태 초기화
  useAuthStore.setState({ isAuthenticated: false });
});

test("초기 상태에서는 로그인 문구가 보이고, 대시보드는 보이지 않는다", () => {
  render(<App />);

  expect(screen.getByText(/로그인이 필요합니다/i)).toBeInTheDocument();
  expect(
    screen.queryByText(/대시보드에 오신 것을 환영합니다/i)
  ).not.toBeInTheDocument();
});

test("로그인 버튼 클릭 시 대시보드로 전환된다", () => {
  render(<App />);

  fireEvent.click(screen.getByText("로그인"));

  expect(
    screen.getByText(/대시보드에 오신 것을 환영합니다/i)
  ).toBeInTheDocument();
});

test("로그인 후에는 로그아웃 버튼이 보여야 한다", () => {
  render(<App />);
  fireEvent.click(screen.getByText("로그인"));

  expect(screen.getByText("로그아웃")).toBeInTheDocument();
});

test("로그아웃 버튼 클릭 시 로그인 화면으로 돌아간다", () => {
  render(<App />);
  fireEvent.click(screen.getByText("로그인"));

  fireEvent.click(screen.getByText("로그아웃"));

  expect(screen.getByText(/로그인이 필요합니다/i)).toBeInTheDocument();
  expect(
    screen.queryByText(/대시보드에 오신 것을 환영합니다/i)
  ).not.toBeInTheDocument();
});