import { startsWithCondition } from "./startsWith";

describe("Condition - Starts With", () => {
  it("should return true when userValue startsWith expectedValue", () => {
    expect(
      startsWithCondition({
        userValue: "test-value",
        expectedValue: "test",
      }),
    ).toBe(true);
  });

  it("should return false when userValue does not startsWith expectedValue", () => {
    expect(
      startsWithCondition({
        userValue: "not-test-value",
        expectedValue: "test",
      }),
    ).toBe(false);
  });
});
