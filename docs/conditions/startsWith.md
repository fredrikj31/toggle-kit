# Conditions - Starts With

You can use this conditions to check if the property starts with the value.

## Example

```ts
const client = createFeatureFlagClient({
  property: {
    username: "johndoe",
  },
  flags: [
    {
      name: "is-john",
      condition: {
        type: "startsWith",
        attribute: "username",
        expectedValue: "john",
      },
    },
  ],
});

client.isEnabled("is-john"); // True
```
