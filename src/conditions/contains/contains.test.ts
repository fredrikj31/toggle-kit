import { createFeatureFlagClient } from "../..";
import { containsCondition } from "./contains";

describe("Condition - Contains", () => {
  it("should return true when value contains expectedValue", () => {
    expect(
      containsCondition({
        value: "test-value",
        expectedValue: "test",
      }),
    ).toBe(true);
  });

  it("should return false when value does not contain expectedValue", () => {
    expect(
      containsCondition({
        value: "test-value",
        expectedValue: "not",
      }),
    ).toBe(false);
  });

  it("should pass end-to-end test", () => {
    const client = createFeatureFlagClient({
      property: {
        roles: "moderator,admin",
      },
      flags: [
        {
          name: "admin-dashboard",
          condition: {
            type: "contains",
            attribute: "roles",
            expectedValue: "admin",
          },
        },
      ],
    });
    expect(client.isEnabled("admin-dashboard")).toBe(true);
  });
});
