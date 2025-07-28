import { equalCondition } from "./equal";

describe("Condition - Equal", () => {
  it("should return true when userValue matches value", () => {
    expect(
      equalCondition({
        userValue: "test-value",
        value: "test-value",
      }),
    ).toBe(true);
  });

  it("should return false when userValue does not match value", () => {
    expect(
      equalCondition({
        userValue: "not-test-value",
        value: "test-value",
      }),
    ).toBe(false);
  });
});
