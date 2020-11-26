# Parcel (v1) plugin for transforming WAST to WASM

Transforms WebAssembly text format (WAST) to binary (WASM) using [wabt](https://github.com/WebAssembly/wabt).

Compatible with [Parcel bundler](https://parceljs.org) v1.x

## Installation to project

`npm install data-ux/parcel-plugin-wast --save-dev`

## Usage

Parcel [loads plugin automatically](https://parceljs.org/plugins.html) if it is present in project. You can just import .wast files as if they were .wasm files:

```
import { add } from './add.wast'

console.log('sum is', add(4, 7));
```
