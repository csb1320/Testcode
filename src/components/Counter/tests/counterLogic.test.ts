import { expect, test } from "vitest";

const increment = (n: number) => n + 1;

test("adds 1 to number", () => {
  expect(increment(1)).toBe(2);
});
