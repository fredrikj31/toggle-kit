import { createFeatureFlagClient } from "../..";
import { endsWithCondition } from "./endsWith";

describe("Condition - Ends With", () => {
  it("should return true when value endsWith expectedValue", () => {
    expect(
      endsWithCondition({
        value: "value-test",
        expectedValue: "test",
      }),
    ).toBe(true);
  });

  it("should return false when value does not endsWith expectedValue", () => {
    expect(
      endsWithCondition({
        value: "value-test-not",
        expectedValue: "test",
      }),
    ).toBe(false);
  });

  it("should pass end-to-end test", () => {
    const client = createFeatureFlagClient({
      property: {
        email: "test@example.com",
      },
      flags: [
        {
          name: "example-emails",
          condition: {
            type: "endsWith",
            attribute: "email",
            expectedValue: "example.com",
          },
        },
      ],
    });
    expect(client.isEnabled("example-emails")).toBe(true);
  });
});
