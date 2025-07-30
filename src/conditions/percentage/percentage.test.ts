import { percentageCondition } from "./percentage";

describe("Condition - Percentage", () => {
  it("should return false when value is 0", () => {
    expect(
      percentageCondition({
        featureName: "feature-name",
        userValue: "user-id",
        value: 0,
      }),
    ).toBe(false);
  });

  it("should return true when value is 100", () => {
    expect(
      percentageCondition({
        featureName: "feature-name",
        userValue: "user-id",
        value: 100,
      }),
    ).toBe(true);
  });

  it("should return true when userValue percentage is equal or below value", () => {
    expect(
      percentageCondition({
        featureName: "feature-name-1",
        userValue: "user-id-1",
        value: 29,
      }),
    ).toBe(true);
    expect(
      percentageCondition({
        featureName: "feature-name-1",
        userValue: "user-id-1",
        value: 30,
      }),
    ).toBe(true);
  });

  it("should return false when userValue is greater than value", () => {
    expect(
      percentageCondition({
        featureName: "feature-name-2",
        userValue: "user-id-2",
        value: 50,
      }),
    ).toBe(false);
  });
});
