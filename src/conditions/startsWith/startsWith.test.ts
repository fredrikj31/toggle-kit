import { createFeatureFlagClient } from "../..";
import { startsWithCondition } from "./startsWith";

describe("Condition - Starts With", () => {
  it("should return true when value startsWith expectedValue", () => {
    expect(
      startsWithCondition({
        value: "test-value",
        expectedValue: "test",
      }),
    ).toBe(true);
  });

  it("should return false when value does not startsWith expectedValue", () => {
    expect(
      startsWithCondition({
        value: "not-test-value",
        expectedValue: "test",
      }),
    ).toBe(false);
  });

  it("should pass end-to-end test", () => {
    const client = createFeatureFlagClient({
      property: {
        username: "JohnDoe",
      },
      flags: [
        {
          name: "is-john",
          conditions: [
            {
              type: "startsWith",
              attribute: "username",
              expectedValue: "John",
            },
          ],
        },
      ],
    });
    expect(client.isEnabled("is-john")).toBe(true);
  });
});
