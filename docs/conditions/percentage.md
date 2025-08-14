# Conditions - Percentage

You can use this conditions to choose a certain percentage which the flags becomes true.

## Example

```ts
const client = createFeatureFlagClient({
  property: {
    userId: "399a0d09-066c-42f8-8f4d-ce6afad21859",
  },
  flags: [
    {
      name: "is-lucky",
      condition: {
        type: "percentage",
        attribute: "userId",
        expectedValue: 50,
      },
    },
  ],
});

client.isEnabled("is-lucky"); // 50/50 percentage chance.
```
