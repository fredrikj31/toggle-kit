# Typed Feature Flags

## Fully typed Feature Flag client

There is some types you need to create, if you want to have the full type safety/support, when creating the feature flag client, and using the flags throughout your codebase. In the example below, we are showing how you can type the feature flag client.

When you want to type the feature flag client, you'll need to create two string literal types. One to store the `FlagNames` and one for the `PropertyNames`.

When you have created the two types, you can pass them in the `createFeatureFlagClient`. These are put inside of the functions' generic parameters.

This will make sure you get autocompletion when creating properties and flags inside of the feature flag client, as well as when you use flags around your codebase.

### Example:

```ts
import { createFeatureFlagClient } from "toggle-kit";

type FlagNames = "secret-page";
type PropertyNames = "userId" | "email" | "age";

const client = createFeatureFlagClient<PropertyNames, FlagNames>({
  property: {
    userId: "eb10e5c2-e3f4-46fc-a6fd-f2ddba0973fb", // <--- Autocompletion
    email: "example@mail.com", // <--- Autocompletion
    age: 21, // <--- Autocompletion
    isAdmin: false, // <--- Type Error
  },
  flags: [
    {
      name: "secret-page", // <--- Autocompletion
      conditions: {
        type: "equal",
        attribute: "email", // <--- Autocompletion
        expectedValue: "test@example.com",
      },
    },
  ],
});

const isSecretPageEnabled = client.isEnabled("secret-page"); // <--- Autocompletion
console.log(isSecretPageEnabled); // True
```

## Semi typed Feature Flag client

If you only know what your feature flags would be named, but don't know what properties you want to pass in, you can choose to only type the `FlagNames`. You can do this by passing in `string`, instead of the `PropertyNames`, when creating the feature flag client.

### Example:

```ts
import { createFeatureFlagClient } from "toggle-kit";

type FlagNames = "secret-page";

const client = createFeatureFlagClient<string, FlagNames>({
  property: {
    userId: "eb10e5c2-e3f4-46fc-a6fd-f2ddba0973fb", // <--- No Autocompletion
    email: "example@mail.com", // <--- No Autocompletion
    age: 21, // <--- No Autocompletion
    isAdmin: false, // <--- No Autocompletion
  },
  flags: [
    {
      name: "secret-page", // <--- Autocompletion
      conditions: {
        type: "equal",
        attribute: "email", // <--- No Autocompletion
        expectedValue: "test@example.com",
      },
    },
  ],
});

const isSecretPageEnabled = client.isEnabled("secret-page"); // <--- Autocompletion
console.log(isSecretPageEnabled); // True
```

You can also choose to not pass `FlagNames` in the `createFeatureFlagClient`. Here you can also pass in string, which would "turn off" the autocompletion, when creating flags and use flags around your codebase.

### Example:

```ts
import { createFeatureFlagClient } from "toggle-kit";

type FlagNames = "secret-page";

const client = createFeatureFlagClient<string, string>({
  property: {
    userId: "eb10e5c2-e3f4-46fc-a6fd-f2ddba0973fb", // <--- No Autocompletion
    email: "example@mail.com", // <--- No Autocompletion
    age: 21, // <--- No Autocompletion
    isAdmin: false, // <--- No Autocompletion
  },
  flags: [
    {
      name: "secret-page", // <--- No Autocompletion
      conditions: {
        type: "equal",
        attribute: "email", // <--- No Autocompletion
        expectedValue: "test@example.com",
      },
    },
  ],
});

const isSecretPageEnabled = client.isEnabled("secret-page"); // <--- No Autocompletion
console.log(isSecretPageEnabled); // True
```
