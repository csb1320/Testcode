import { useAuthStore } from "../store/useAuthStore";
import { expect, test, beforeEach } from "vitest";

// 테스트 전마다 상태 초기화
beforeEach(() => {
  useAuthStore.setState({ user: null });
});

test("초기 상태는 로그인되지 않은 상태여야 한다", () => {
  expect(useAuthStore.getState().user).toBeNull();
});

test("login 함수 호출 시 user가 설정된다", () => {
  const mockUser = { id: 1, name: "조성빈" };

  useAuthStore.getState().login(mockUser);

  expect(useAuthStore.getState().user).toEqual(mockUser);
});

test("logout 함수 호출 시 user가 null이 된다", () => {
  const mockUser = { id: 1, name: "조성빈" };

  useAuthStore.getState().login(mockUser);
  useAuthStore.getState().logout();

  expect(useAuthStore.getState().user).toBeNull();
});
