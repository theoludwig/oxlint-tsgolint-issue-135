# oxlint-tsgolint-issue-135

Minimal reproduction repository for "`no-floating-promises` with `allowForKnownSafeCalls` not working" issue: <https://github.com/oxc-project/tsgolint/issues/135>.

## Prerequisites

[Node.js](https://nodejs.org/) >= v24.0.0

## Usage

```sh
npm clean-install

# This will report an error due to a floating promise when it shouldn't
node --run lint
```
