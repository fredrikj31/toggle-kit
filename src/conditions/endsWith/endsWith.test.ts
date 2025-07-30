import { endsWithCondition } from "./endsWith";

describe("Condition - Ends With", () => {
  it("should return true when userValue endsWith expectedValue", () => {
    expect(
      endsWithCondition({
        userValue: "value-test",
        expectedValue: "test",
      }),
    ).toBe(true);
  });

  it("should return false when userValue does not endsWith expectedValue", () => {
    expect(
      endsWithCondition({
        userValue: "value-test-not",
        expectedValue: "test",
      }),
    ).toBe(false);
  });
});
