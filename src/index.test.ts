import { createFeatureFlagClient } from ".";
import { defineFlags } from "./helpers/defineFlags";

describe("End-To-End Tests - Library Tests", () => {
  it("should return true when getting isEnabled feature flag", () => {
    const user = {
      email: "test@example.com",
    } as const;
    const flags = defineFlags(user, [
      {
        name: "admin-dashboard",
        condition: {
          type: "equal",
          attribute: "email",
          value: "test@example.com",
        },
      },
    ]);

    const client = createFeatureFlagClient({ user, flags });

    expect(client.isEnabled("admin-dashboard")).toBe(true);
  });
});
