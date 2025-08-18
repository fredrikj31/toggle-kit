## Simple Setup

The most simple and easy way to go about creating, and use feature flags. This is the simplest version you can utilize the library. This does not support type safety, so you wont get any autocompletion when creating and using the feature flags.

```ts
import { createFeatureFlagClient } from "toggle-kit";

const client = createFeatureFlagClient({
  property: {
    userId: "eb10e5c2-e3f4-46fc-a6fd-f2ddba0973fb",
    email: "example@mail.com",
    age: 21,
    isAdmin: false,
  },
  flags: [
    {
      name: "secret-page", // No autocompletion
      conditions: [
        {
          type: "equal",
          attribute: "email", // No autocompletion
          expectedValue: "test@example.com",
        },
      ],
    },
  ],
});

const isSecretPageEnabled = client.isEnabled("secret-page"); // No autocompletion
console.log(isSecretPageEnabled); // True
```
