# Conditions - Less Than

You can use this conditions to check if the property (number) is less than the value.

## Example

```ts
const client = createFeatureFlagClient({
  property: {
    age: 21,
  },
  flags: [
    {
      name: "is-child",
      conditions: [
        {
          type: "lessThan",
          attribute: "age",
          expectedValue: 21,
        },
      ],
    },
  ],
});

client.isEnabled("is-child"); // True
```
