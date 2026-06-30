# ES6_basic

This project covers the basics of ES6 (ECMAScript 2015) features in JavaScript, executed on Node.js 12.11.x.

## Learning Objectives

- The difference between a function and a method
- The new features introduced in ES6
- The difference between a constant and a variable
- Block-scoping with `let` and `const`
- Arrow functions and default parameters
- Rest and spread function parameters
- String templating with template literals
- Object creation and properties in ES6
- Iterators and `for...of` loops

## Requirements

- All files are executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All files end with a new line
- A `README.md` file at the root of the project is mandatory
- Code uses the `.js` extension
- Code is tested using the Jest Testing Framework
- Code is analyzed using ESLint with the airbnb-base rules
- All functions must be exported

## Setup

```bash
npm install
```

## Usage

Run a file with babel-node, e.g.:

```bash
npm run dev 0-main.js
```

Run the linter:

```bash
npm run check-lint
```

Run the tests:

```bash
npm test
```

Run lint and tests together:

```bash
npm run full-test
```

## Tasks

| File | Description |
| --- | --- |
| `0-constants.js` | const / let usage |
| `1-block-scoped.js` | Block scoping |
| `2-arrow.js` | Arrow functions |
| `3-default-parameter.js` | Default parameters |
| `4-rest-parameter.js` | Rest parameters |
| `5-spread-operator.js` | Spread syntax |
| `6-string-interpolation.js` | Template literals |
| `7-getBudgetObject.js` | Object property shorthand |
| `8-getBudgetCurrentYear.js` | Computed property names |
| `9-getFullBudget.js` | ES6 method properties |
| `10-loops.js` | for...of loops |
| `11-createEmployeesObject.js` | Iterator / computed keys |
| `12-createReportObject.js` | Spread + method properties |
