import { equalCondition } from "./equal";

describe("Condition - Equal", () => {
  it("should return true when userValue matches expectedValue", () => {
    expect(
      equalCondition({
        userValue: "test-value",
        expectedValue: "test-value",
      }),
    ).toBe(true);
  });

  it("should return false when userValue does not match expectedValue", () => {
    expect(
      equalCondition({
        userValue: "not-test-value",
        expectedValue: "test-value",
      }),
    ).toBe(false);
  });
});
