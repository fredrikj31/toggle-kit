# Conditions - Ends With

You can use this conditions to check if the property ends with the value.

## Example

```ts
const client = createFeatureFlagClient({
  property: {
    email: "test@example.com",
  },
  flags: [
    {
      name: "is-example-mail",
      condition: {
        type: "endsWith",
        attribute: "email",
        expectedValue: "@example.com",
      },
    },
    {
      name: "is-google-mail",
      condition: {
        type: "endsWith",
        attribute: "email",
        expectedValue: "@gmail.com",
      },
    },
  ],
});

client.isEnabled("is-example-mail"); // True
client.isEnabled("is-google-mail"); // False
```
