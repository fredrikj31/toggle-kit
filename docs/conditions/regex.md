# Conditions - Percentage

You can use this conditions to check if a given property matches the specific regex.

## Example

```ts
const client = createFeatureFlagClient({
  property: {
    email: "example@gmail.com",
  },
  flags: [
    {
      name: "is-gmail",
      conditions: [
        {
          type: "regex",
          attribute: "email",
          expectedValue: /.+@gmail\.com/,
        },
      ],
    },
  ],
});

client.isEnabled("is-gmail"); // True
```
