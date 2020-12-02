# Repro for Rollup CommonJS with Snowpack of Zod

https://github.com/rollup/plugins/pull/658#issuecomment-736997182

## Setup

```sh
yarn
```

## Successful run with Node 14+

```sh
node src/index.mjs
```

## Failed run after building with Snowpack/Rollup

```sh
yarn dev
```

## Inspecting Snowpack built files

```sh
yarn build
cat build/web_modules/zod.js
```

## Building and running with Rollup alone

```sh
yarn rollup -c
node output/index.js
```
