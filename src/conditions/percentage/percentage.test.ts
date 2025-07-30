import { percentageCondition } from "./percentage";

describe("Condition - Percentage", () => {
  it("should return false when expectedValue is 0", () => {
    expect(
      percentageCondition({
        featureName: "feature-name",
        value: "user-id",
        expectedValue: 0,
      }),
    ).toBe(false);
  });

  it("should return true when expectedValue is 100", () => {
    expect(
      percentageCondition({
        featureName: "feature-name",
        value: "user-id",
        expectedValue: 100,
      }),
    ).toBe(true);
  });

  it("should return true when value percentage is equal or below expectedValue", () => {
    expect(
      percentageCondition({
        featureName: "feature-name-1",
        value: "user-id-1",
        expectedValue: 29,
      }),
    ).toBe(true);
    expect(
      percentageCondition({
        featureName: "feature-name-1",
        value: "user-id-1",
        expectedValue: 30,
      }),
    ).toBe(true);
  });

  it("should return false when value is greater than expectedValue", () => {
    expect(
      percentageCondition({
        featureName: "feature-name-2",
        value: "user-id-2",
        expectedValue: 50,
      }),
    ).toBe(false);
  });
});
