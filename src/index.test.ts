import { createFeatureFlagClient } from ".";
import { defineFlags } from "./helpers/defineFlags";

describe("End-To-End Tests - Library Tests", () => {
  it("should return true when feature flag is string", () => {
    const client = createFeatureFlagClient({
      user: {
        email: "test@example.com",
      },
      flags: [
        {
          name: "secret-page",
          condition: {
            type: "equal",
            attribute: "email",
            value: "test@example.com",
          },
        },
      ],
    });
    expect(client.isEnabled("secret-page")).toBe(true);
  });

  it("should return true when feature flag is number", () => {
    const client = createFeatureFlagClient({
      user: {
        price: 100,
      },
      flags: [
        {
          name: "discount-price",
          condition: {
            type: "equal",
            attribute: "price",
            value: 100,
          },
        },
      ],
    });
    expect(client.isEnabled("discount-price")).toBe(true);
  });

  it("should return true when feature flag is boolean", () => {
    const client = createFeatureFlagClient({
      user: {
        isAdmin: true,
      },
      flags: [
        {
          name: "admin-dashboard",
          condition: {
            type: "equal",
            attribute: "isAdmin",
            value: true,
          },
        },
      ],
    });
    expect(client.isEnabled("admin-dashboard")).toBe(true);
  });
});
