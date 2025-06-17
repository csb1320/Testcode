import { useAuthStore } from "../store/useAuthStore";
import { expect, test, beforeEach } from "vitest";

beforeEach(() => {
  // 상태 초기화
  useAuthStore.setState({ isAuthenticated: false });
});

test("초기 상태는 로그인되지 않은 상태여야 한다", () => {
  expect(useAuthStore.getState().isAuthenticated).toBe(false);
});

test("login 함수 호출 시 isAuthenticated가 true가 된다", () => {
  useAuthStore.getState().login();
  expect(useAuthStore.getState().isAuthenticated).toBe(true);
});

test("logout 함수 호출 시 isAuthenticated가 false가 된다", () => {
  useAuthStore.getState().login(); // 먼저 로그인
  useAuthStore.getState().logout(); // 로그아웃
  expect(useAuthStore.getState().isAuthenticated).toBe(false);
});
