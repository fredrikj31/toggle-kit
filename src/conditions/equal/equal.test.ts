import { createFeatureFlagClient } from "../..";
import { equalCondition } from "./equal";

describe("Condition - Equal", () => {
  it("should return true when value matches expectedValue", () => {
    expect(
      equalCondition({
        value: "test-value",
        expectedValue: "test-value",
      }),
    ).toBe(true);
  });

  it("should return false when value does not match expectedValue", () => {
    expect(
      equalCondition({
        value: "not-test-value",
        expectedValue: "test-value",
      }),
    ).toBe(false);
  });

  it("should pass end-to-end test", () => {
    const client = createFeatureFlagClient({
      property: {
        isAdmin: true,
      },
      flags: [
        {
          name: "is-admin",
          conditions: [
            {
              type: "equal",
              attribute: "isAdmin",
              expectedValue: true,
            },
          ],
        },
      ],
    });
    expect(client.isEnabled("is-admin")).toBe(true);
  });
});
