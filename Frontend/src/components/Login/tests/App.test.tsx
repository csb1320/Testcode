import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "../App";
import { beforeEach, afterEach, vi, expect, test } from "vitest";
import "@testing-library/jest-dom";
import { useAuthStore } from "../store/useAuthStore";

// 매 테스트 전에 상태 초기화
beforeEach(() => {
  useAuthStore.setState({ user: null });
});

// fetch mock: 로그인 API만 가짜 응답 준비
beforeEach(() => {
  vi.spyOn(global, "fetch").mockImplementation((url) => {
    if (url === "http://localhost:4000/api/login") {
      return Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            message: "Login successful",
            user: {
              id: 1,
              username: "조성빈",
              name: "조성빈",
            },
          }),
      } as unknown as Response);
    }

    if (url === "http://localhost:4000/api/users") {
      return Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve([
            { id: 1, username: "조성빈", password: "4242", name: "조성빈" },
            { id: 2, username: "정유열", password: "3260", name: "정유열" },
            { id: 3, username: "임두현", password: "8088", name: "임두현" },
            { id: 4, username: "김수민", password: "9126", name: "김수민" },
          ]),
      } as unknown as Response);
    }

    return Promise.reject(new Error("Unhandled API request"));
  });
});

// 테스트 후 spy 복구
afterEach(() => {
  vi.restoreAllMocks();
});

test("초기 상태에서는 로그인 화면이 보인다", () => {
  render(<App />);
  expect(screen.getByText(/Login/i)).toBeInTheDocument();
  expect(
    screen.queryByText(/대시보드에 오신 것을 환영합니다/i)
  ).not.toBeInTheDocument();
});

test("로그인 입력 후 대시보드로 전환된다", async () => {
  render(<App />);

  // Username, Password 입력
  fireEvent.change(screen.getByPlaceholderText("Username"), {
    target: { value: "조성빈" },
  });
  fireEvent.change(screen.getByPlaceholderText("Password"), {
    target: { value: "4242" },
  });

  fireEvent.click(screen.getByRole("button", { name: "로그인" }));

  await waitFor(() => {
    expect(
      screen.getByText(/조성빈님! 대시보드에 오신 것을 환영합니다/i)
    ).toBeInTheDocument();
  });
});

test("로그아웃 시 로그인 화면으로 돌아간다", async () => {
  render(<App />);

  // 로그인
  fireEvent.change(screen.getByPlaceholderText("Username"), {
    target: { value: "조성빈" },
  });
  fireEvent.change(screen.getByPlaceholderText("Password"), {
    target: { value: "4242" },
  });

  fireEvent.click(screen.getByRole("button", { name: "로그인" }));

  await waitFor(() => {
    expect(screen.getByText("로그아웃")).toBeInTheDocument();
  });

  // 로그아웃
  fireEvent.click(screen.getByRole("button", { name: "로그아웃" }));

  expect(screen.getByText("Login")).toBeInTheDocument();
});
