# Unittests in JS

This project covers unit testing and integration testing in JavaScript
using Mocha, the Node `assert` library, Chai, and Sinon.

## Requirements

- All code is executed on Ubuntu 18.04 using Node 12.x.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All files end with a new line
- Code uses the `.js` extension
- Tests are run with `npm test <file>.test.js`

## Setup

```
npm install
```

## Tasks

| File(s) | Description |
| --- | --- |
| `0-calcul.js`, `0-calcul.test.js` | Basic test with Mocha and Node `assert` |
| `1-calcul.js`, `1-calcul.test.js` | Combining descriptions with `describe` |
| `2-calcul_chai.js`, `2-calcul_chai.test.js` | Basic test using Chai's `expect` |
| `utils.js`, `3-payment.js`, `3-payment.test.js` | Spies with Sinon |
| `4-payment.js`, `4-payment.test.js` | Stubs with Sinon |
| `5-payment.js`, `5-payment.test.js` | Hooks (`beforeEach` / `afterEach`) |
| `6-payment_token.js`, `6-payment_token.test.js` | Async tests with `done` |
| `7-skip.test.js` | Skipping tests |
| `8-api/` | Basic integration testing with Express |
| `9-api/` | Regex integration testing |
| `10-api/` | Deep equality & POST integration testing |

## Running tests

```
npm test 0-calcul.test.js
npm test 1-calcul.test.js
npm test 2-calcul_chai.test.js
npm test 3-payment.test.js
npm test 4-payment.test.js
npm test 5-payment.test.js
npm test 6-payment_token.test.js
npm test 7-skip.test.js
```

For `8-api`, `9-api`, and `10-api`, start the server first, then run the
tests in another terminal:

```
node api.js
npm test api.test.js
```
