### Type feature flags

Last but not least, we want to create our first flag. Here we specify a name for the feature flag and select the type of condition we want to evaluate upon. Then we select the property we want to evaluate, and an expected value.

```ts
import { createFeatureFlagClient } from "toggle-kit";

type FlagNames = "secret-page";

const client = createFeatureFlagClient<FlagNames>({
  property: {
    userId: "eb10e5c2-e3f4-46fc-a6fd-f2ddba0973fb",
    email: "example@mail.com",
    age: 21,
    isAdmin: false,
  },
  flags: [
    {
      name: "secret-page",
      condition: {
        type: "equal",
        attribute: "email",
        expectedValue: "test@example.com",
      },
    },
  ],
});

const isSecretPageEnabled = client.isEnabled("secret-page"); // <--- Autocompletion
console.log(isSecretPageEnabled); // True
```
