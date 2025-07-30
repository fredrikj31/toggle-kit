import { lessThanCondition } from "./lessThan";

describe("Condition - Less Than", () => {
  it("should return true if userValue is less than value", () => {
    const userValue = 5;
    const value = 10;

    const result = lessThanCondition({
      userValue,
      value,
    });
    const expectedResult = true;

    expect(result).toBe(expectedResult);
  });

  it("should return false if userValue is greater than value", () => {
    const userValue = 10;
    const value = 5;

    const result = lessThanCondition({
      userValue,
      value,
    });
    const expectedResult = false;

    expect(result).toBe(expectedResult);
  });
});
