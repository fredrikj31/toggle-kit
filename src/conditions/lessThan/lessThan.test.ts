import { createFeatureFlagClient } from "../..";
import { lessThanCondition } from "./lessThan";

describe("Condition - Less Than", () => {
  it("should return true if value is less than expectedValue", () => {
    const value = 5;
    const expectedValue = 10;

    const result = lessThanCondition({
      value,
      expectedValue,
    });
    const expectedResult = true;

    expect(result).toBe(expectedResult);
  });

  it("should return false if value is greater than expectedValue", () => {
    const value = 10;
    const expectedValue = 5;

    const result = lessThanCondition({
      value,
      expectedValue,
    });
    const expectedResult = false;

    expect(result).toBe(expectedResult);
  });

  it("should pass end-to-end test", () => {
    const client = createFeatureFlagClient({
      property: {
        age: 18,
      },
      flags: [
        {
          name: "is-teenager",
          conditions: [
            {
              type: "lessThan",
              attribute: "age",
              expectedValue: 21,
            },
          ],
        },
      ],
    });
    expect(client.isEnabled("is-teenager")).toBe(true);
  });
});
