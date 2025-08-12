# Toggle Kit

A customizable feature flag library, which allows you to define properties and flags. Everything runs "locally" on the service (application or API), without any dependencies.

## Table of contents

- [Prerequisites](#prerequisites)
- [Table of contents](#table-of-contents)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
  - [Setting up feature flag client](#setting-up-feature-flag-client)
  - [Add properties to client](#add-properties-to-client)
  - [Create feature flag](#create-feature-flag)
- [Contributing](#contributing)
- [Credits](#credits)
- [Built With](#built-with)
- [Versioning](#versioning)
- [Authors](#authors)
- [License](#license)

## Getting Started

These instructions will help you install the package itself and set the library up. It's gonna guide you through how to add properties, and how to create flags with different conditions.

## Installation

This project requires NodeJS (version 20 or later) and NPM. Node and NPM are really easy to install. To make sure you have them available on your machine, try running the following command.

```shell
$ npm -v && node -v
10.x.x
v20.x.x
```

To install the package using NPM, PNPM or yarn, run:

```shell
$ npm install toggle-kit
$ pnpm install toggle-kit
$ yarn install toggle-kit
```

## Usage

### Setting up feature flag client

First of all we want to create an instance of the feature flag client. We can do this by using the `createFeatureFlagClient` method, which is gonna return an instance of the feature flag class.

```ts
import { createFeatureFlagClient } from "toggle-kit";

const client = createFeatureFlagClient({
  property: {
    // TODO: Add properties
  },
  flags: [
    // TODO: Create flags
  ],
});
```

### Add properties to client

Secondly we want add some attributes we can use in the condition in each of the feature flags we are creating later. You are allowed to use `string`, `number` or `boolean` types as a property

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
    // TODO: Create flags
  ],
});
```

### Create feature flag

Last but not least, we want to create our first flag. Here we specify a name for the feature flag and select the type of condition we want to evaluate upon. Then we select the property we want to evaluate, and an expected value.

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
      name: "secret-page",
      condition: {
        type: "equal",
        attribute: "email",
        expectedValue: "test@example.com",
      },
    },
  ],
});
```

## Contributing

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Add your changes: `git add .`
4. Commit your changes: `git commit -am 'Add some feature'`
5. Push to the branch: `git push origin my-new-feature`
6. Submit a pull request 😎

This package only allows the conventional commits on commit messages. This allows [semantic-release](https://github.com/semantic-release/semantic-release) to analyze the commits. The commit message should be structured as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

The common types can be: `build`, `chore`, `ci`, `docs`, `feat`, `fix`, `perf`, `refactor`, `revert`, `style`, `test`

## Credits

- Readme template [@andreasonny83](https://github.com/andreasonny83)
- Library structure inspiration [@trustpilot/skift](https://github.com/trustpilot/skift)

## Built With

- [TypeScript](https://www.typescriptlang.org)
- [Jest](https://jestjs.io)
- Love ❤️

## Versioning

We use [SemVer](http://semver.org) for versioning. For the versions available, see the [tags on this repository](https://github.com/fredrikj31/toggle-kit/tags).

## Authors

Fredrik Johansen - Initial work - [fredrikj31](https://github.com/fredrikj31)

See also the list of [contributors](https://github.com/fredrikj31/toggle-kit/contributors) who participated in this project.

## License

[MIT License](./LICENSE.md) (c) Fredrik Johansen and Contributors
