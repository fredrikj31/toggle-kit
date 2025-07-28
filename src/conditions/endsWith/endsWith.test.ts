import { endsWithCondition } from "./endsWith";

describe("Condition - Ends With", () => {
  it("should return true when userValue endsWith value", () => {
    expect(
      endsWithCondition({
        userValue: "value-test",
        value: "test",
      }),
    ).toBe(true);
  });

  it("should return false when userValue does not endsWith value", () => {
    expect(
      endsWithCondition({
        userValue: "value-test-not",
        value: "test",
      }),
    ).toBe(false);
  });
});
