import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Login from "../pages/Login";
import { MemoryRouter } from "react-router-dom";
import { expect, test, vi, beforeEach, afterEach } from "vitest";
import "@testing-library/jest-dom";
import { useAuthStore } from "../store/useAuthStore";

beforeEach(() => {
  useAuthStore.setState({ user: null });

  vi.spyOn(global, "fetch").mockImplementation((url) => {
    if (url === "http://localhost:4000/api/login") {
      return Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            message: "Login successful",
            user: { id: 1, name: "조성빈" },
          }),
      } as unknown as Response);
    }

    return Promise.reject(new Error("Unhandled request"));
  });
});

afterEach(() => {
  vi.restoreAllMocks();
});

test("아이디, 비밀번호 입력 후 로그인 버튼 클릭 시 로그인된다", async () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );

  fireEvent.change(screen.getByPlaceholderText("Username"), {
    target: { value: "조성빈" },
  });

  fireEvent.change(screen.getByPlaceholderText("Password"), {
    target: { value: "4242" },
  });

  fireEvent.click(screen.getByRole("button", { name: "로그인" }));

  await waitFor(() => {
    expect(useAuthStore.getState().user).toEqual({ id: 1, name: "조성빈" });
  });
});
