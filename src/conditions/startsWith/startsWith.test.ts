import { startsWithCondition } from "./startsWith";

describe("Condition - Starts With", () => {
  it("should return true when value startsWith expectedValue", () => {
    expect(
      startsWithCondition({
        value: "test-value",
        expectedValue: "test",
      }),
    ).toBe(true);
  });

  it("should return false when value does not startsWith expectedValue", () => {
    expect(
      startsWithCondition({
        value: "not-test-value",
        expectedValue: "test",
      }),
    ).toBe(false);
  });
});
