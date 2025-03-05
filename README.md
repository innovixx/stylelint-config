# Stylelint Config Guide

## Highlights

An extensible Stylelint config for enforcing consistent conventions and best practices in SASS, SCSS, Less & CSS.

## Quick Start

### Installation

```bash
$ npm i --save-dev @innovixx/stylelint-config
$ # or
$ yarn add --dev @innovixx/stylelint-config
$ #or
$ pnpm i --save-dev @innovixx/stylelint-config
```

### Usage

There are a number of configurations for consumption. For an example of a minimal base configuration:

```javascript
import plugins from "./config/plugins/index.mjs";
import rules from "./config/rules/index.mjs";
import extendsConfig from "./config/extends/index.mjs";

export default {
  extends: [
    ...extendsConfig.extends
  ],
  plugins: [
    ...plugins.plugins
  ],
  rules: {
    ...rules.rules
  }
}
```
This can then be extended to provide custom rules, plugins, and settings. For more information see the [Stylelint config guide](https://stylelint.io/user-guide/configure)

For working examples, see the [demo app](./demo).

## Demo

```bash
$ git clone git@github.com:innovixx/stylelint-config.git
$ pnpm i
$ pnpm lint
```

The demo directory uses the Stylelint config file in the [root](https://github.com/innovixx/stylelint-config/blob/master/stylelint.config.mjs) of the project.

## License

[MIT](https://github.com/innovixx/stylelint-config/blob/master/LICENSE) Copyright (c) Innovixx, Ltd