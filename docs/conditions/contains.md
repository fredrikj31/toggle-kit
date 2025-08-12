# Conditions - Contains

You can use this conditions to check if the property contains/includes the value inside of string.

## Example

```ts
const client = createFeatureFlagClient({
  property: {
    email: "test@example.com",
    roles: "moderator,admin",
  },
  flags: [
    {
      name: "is-admin",
      condition: {
        type: "contains",
        attribute: "roles",
        expectedValue: "admin",
      },
    },
    {
      name: "is-gmail",
      condition: {
        type: "contains",
        attribute: "email",
        expectedValue: "@gmail.com",
      },
    },
  ],
});

client.isEnabled("is-admin"); // True
client.isEnabled("is-gmail"); // False
```
