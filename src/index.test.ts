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
});
