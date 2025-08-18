# Conditions - Greater Than

You can use this conditions to check if the property (number) is greater than the value.

## Example

```ts
const client = createFeatureFlagClient({
  property: {
    age: 21,
  },
  flags: [
    {
      name: "is-adult",
      conditions: [
        {
          type: "greaterThan",
          attribute: "age",
          expectedValue: 20,
        },
      ],
    },
  ],
});

client.isEnabled("is-adult"); // True
```
