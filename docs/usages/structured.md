# Structured Feature Flags

## Extract "Properties" from client

You can choose to extract the properties out from the feature flag client into a variable. This can improve the readability, and structure of the code, by extracting them out.

### Example:

```ts
import { createFeatureFlagClient, type Property } from "toggle-kit";

type PropertyNames = "userId" | "email" | "age";

const properties: Property<PropertyNames> = {
  userId: "eb10e5c2-e3f4-46fc-a6fd-f2ddba0973fb", // <--- Autocompletion
  email: "example@mail.com", // <--- Autocompletion
  age: 21, // <--- Autocompletion
  isAdmin: false, // <--- Type Error
};

const client = createFeatureFlagClient<PropertyNames, string>({
  property: properties,
  flags: [],
});
```

## Extract "Flags" from client

You can also choose to extract the flags out from the feature flag client into a variable. I find this very helpful, when you have many flags to manage. You can either choose to pass in both `PropertyNames` and `FlagNames` into the `FeatureFlag`, or you can pass in one of them in. By providing both, it will provide with full autocompletion, when creating the flags.

### Example:

```ts
import { createFeatureFlagClient, type Property } from "toggle-kit";

type PropertyNames = "userId" | "email" | "age";
type FlagNames = "secret-page";

const flags: FeatureFlag<PropertyNames, FlagNames>[] = [
  {
    name: "secret-page", // <--- Autocompletion
    conditions: [
      {
        type: "equal",
        attribute: "email", // <--- Autocompletion
        expectedValue: "test@example.com",
      },
    ],
  },
];

const client = createFeatureFlagClient<PropertyNames, string>({
  property: {
    userId: "eb10e5c2-e3f4-46fc-a6fd-f2ddba0973fb",
    email: "example@mail.com",
    age: 21,
    isAdmin: false,
  },
  flags,
});
```
