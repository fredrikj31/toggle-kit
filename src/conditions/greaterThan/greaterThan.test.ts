import { createFeatureFlagClient } from "../..";
import { greaterThanCondition } from "./greaterThan";

describe("Condition - Greater Than", () => {
  it("should return true if value is greater than expectedValue", () => {
    const value = 10;
    const expectedValue = 5;

    const result = greaterThanCondition({
      value,
      expectedValue,
    });
    const expectedResult = true;

    expect(result).toBe(expectedResult);
  });

  it("should return false if value is less than expectedValue", () => {
    const value = 5;
    const expectedValue = 10;

    const result = greaterThanCondition({
      value,
      expectedValue,
    });
    const expectedResult = false;

    expect(result).toBe(expectedResult);
  });

  it("should pass end-to-end test", () => {
    const client = createFeatureFlagClient({
      property: {
        age: 25,
      },
      flags: [
        {
          name: "is-adult",
          conditions: [
            {
              type: "greaterThan",
              attribute: "age",
              expectedValue: 21,
            },
          ],
        },
      ],
    });
    expect(client.isEnabled("is-adult")).toBe(true);
  });
});
