import { createFeatureFlagClient } from "../..";
import { containsCondition } from "./contains";

describe("Condition - Contains", () => {
  it("should return true when userValue contains value", () => {
    expect(
      containsCondition({
        userValue: "test-value",
        value: "test",
      }),
    ).toBe(true);
  });

  it("should return false when userValue does not contain value", () => {
    expect(
      containsCondition({
        userValue: "test-value",
        value: "not",
      }),
    ).toBe(false);
  });

  it("should return true when feature flag is boolean", () => {
    const client = createFeatureFlagClient({
      user: {
        roles: "moderator,admin",
      },
      flags: [
        {
          name: "admin-dashboard",
          condition: {
            type: "contains",
            attribute: "roles",
            value: "admin",
          },
        },
      ],
    });
    expect(client.isEnabled("admin-dashboard")).toBe(true);
  });
});
