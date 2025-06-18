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
            user: { id: 1, name: "Alice" },
          }),
      } as unknown as Response);
    }

    return Promise.reject(new Error("Unhandled request"));
  });
});

afterEach(() => {
  vi.restoreAllMocks();
});

test("아이디, 비밀번호 입력 후 로그인 버튼 클릭 시 user가 설정된다", async () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );

  fireEvent.change(screen.getByPlaceholderText("Username"), {
    target: { value: "alice" },
  });

  fireEvent.change(screen.getByPlaceholderText("Password"), {
    target: { value: "1234" },
  });

  fireEvent.click(screen.getByRole("button", { name: "로그인" }));

  await waitFor(() => {
    expect(useAuthStore.getState().user).toEqual({ id: 1, name: "Alice" });
  });
});
