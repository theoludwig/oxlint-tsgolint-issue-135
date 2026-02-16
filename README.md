# microsoft/typescript-go/issues/2797

TS2488: Generic type parameter not inferred from JSX props, falls back to default

Minimal reproduction repository for `TS2488` issue: <https://github.com/microsoft/typescript-go/issues/2797>.

## Prerequisites

[Node.js](https://nodejs.org/) >= v24.0.0

## Usage

```sh
npm clean-install

# This will report an error due to a unbound method when it shouldn't
node --run oxlint
```
