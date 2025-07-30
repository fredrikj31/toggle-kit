import { equalCondition } from "./equal";

describe("Condition - Equal", () => {
  it("should return true when value matches expectedValue", () => {
    expect(
      equalCondition({
        value: "test-value",
        expectedValue: "test-value",
      }),
    ).toBe(true);
  });

  it("should return false when value does not match expectedValue", () => {
    expect(
      equalCondition({
        value: "not-test-value",
        expectedValue: "test-value",
      }),
    ).toBe(false);
  });
});
