# oxlint-tsgolint-issue-611

Minimal reproduction repository for `unbound-method` issue: <https://github.com/oxc-project/tsgolint/issues/611>.

## Prerequisites

[Node.js](https://nodejs.org/) >= v24.0.0

## Usage

```sh
npm clean-install

# This will report an error due to a unbound method when it shouldn't
node --run oxlint
```
