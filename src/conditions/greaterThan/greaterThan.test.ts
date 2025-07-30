import { greaterThanCondition } from "./greaterThan";

describe("Condition - Greater Than", () => {
  it("should return true if userValue is greater than expectedValue", () => {
    const userValue = 10;
    const expectedValue = 5;

    const result = greaterThanCondition({
      userValue,
      expectedValue,
    });
    const expectedResult = true;

    expect(result).toBe(expectedResult);
  });

  it("should return false if userValue is less than expectedValue", () => {
    const userValue = 5;
    const expectedValue = 10;

    const result = greaterThanCondition({
      userValue,
      expectedValue,
    });
    const expectedResult = false;

    expect(result).toBe(expectedResult);
  });
});
