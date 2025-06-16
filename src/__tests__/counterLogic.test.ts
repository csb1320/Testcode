import { expect, test } from "vitest";
import { increment } from "../utils/counterLogic";

test("adds 1 to number", () => {
  expect(increment(1)).toBe(2);
});
