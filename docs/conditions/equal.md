# Conditions - Equal

You can use this conditions to check if the property matches the value.

## Example

```ts
const client = createFeatureFlagClient({
  property: {
    username: "JohnDoe",
  },
  flags: [
    {
      name: "is-john",
      condition: {
        type: "equal",
        attribute: "username",
        expectedValue: "JohnDoe",
      },
    },
    {
      name: "is-jane",
      condition: {
        type: "equal",
        attribute: "username",
        expectedValue: "JaneDoe",
      },
    },
  ],
});

client.isEnabled("is-john"); // True
client.isEnabled("is-jane"); // False
```
