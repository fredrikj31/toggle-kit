import { createFeatureFlagClient } from ".";

describe("End-To-End Tests - Library Tests", () => {
  it("should return true when feature flag is string", () => {
    const client = createFeatureFlagClient({
      property: {
        email: "test@example.com",
      },
      flags: [
        {
          name: "secret-page",
          conditions: [
            {
              type: "equal",
              attribute: "email",
              expectedValue: "test@example.com",
            },
          ],
        },
      ],
    });
    expect(client.isEnabled("secret-page")).toBe(true);
  });

  it("should return true when feature flag is number", () => {
    const client = createFeatureFlagClient({
      property: {
        price: 100,
      },
      flags: [
        {
          name: "discount-price",
          conditions: [
            {
              type: "equal",
              attribute: "price",
              expectedValue: 100,
            },
          ],
        },
      ],
    });
    expect(client.isEnabled("discount-price")).toBe(true);
  });

  it("should return true when feature flag is boolean", () => {
    const client = createFeatureFlagClient({
      property: {
        isAdmin: true,
      },
      flags: [
        {
          name: "admin-dashboard",
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
    expect(client.isEnabled("admin-dashboard")).toBe(true);
  });

  it("should return true when feature flag contains multiple conditions", () => {
    const client = createFeatureFlagClient({
      property: {
        isAdmin: false,
        roles: "moderator,admin",
      },
      flags: [
        {
          name: "admin-dashboard",
          conditions: [
            {
              type: "equal",
              attribute: "isAdmin",
              expectedValue: true,
            },
            {
              type: "contains",
              attribute: "roles",
              expectedValue: "admin",
            },
          ],
        },
      ],
    });
    expect(client.isEnabled("admin-dashboard")).toBe(true);
  });

  it("should continue and check other conditions, when condition type is not supported", () => {
    // This is a little special test case
    // We want to make sure that even if one of the conditions is unsupported, it does not fail the whole flag (other conditions)
    // We simply just continue through the other conditions, and check if some of them return true.
    const isAdminCondition = {
      type: "hej" as const,
      attribute: "isAdmin",
      expectedValue: true,
    };
    const roleCondition = {
      type: "contains" as const,
      attribute: "roles",
      expectedValue: "admin",
    };

    const client = createFeatureFlagClient({
      property: {
        isAdmin: false,
        roles: "moderator,admin",
      },
      flags: [
        {
          name: "admin-dashboard",
          conditions: [
            // It's giving a Type error, when the type is not supported. We ignore it here, because we want to test what happens when we give it an unsupported condition type.
            // @ts-ignore
            isAdminCondition,
            roleCondition, // This should make sure the flag return true, even though the "isAdminCondition" is unsupported.
          ],
        },
      ],
    });

    expect(client.isEnabled("admin-dashboard")).toBe(true);
  });
});
