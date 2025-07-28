import { startsWithCondition } from "./startsWith";

describe("Condition - Starts With", () => {
  it("should return true when userValue startsWith value", () => {
    expect(
      startsWithCondition({
        userValue: "test-value",
        value: "test",
      }),
    ).toBe(true);
  });

  it("should return false when userValue does not startsWith value", () => {
    expect(
      startsWithCondition({
        userValue: "not-test-value",
        value: "test",
      }),
    ).toBe(false);
  });
});
