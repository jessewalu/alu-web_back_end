# ES6_promise

This project covers ES6 Promises in JavaScript, executed on Node.js 12.11.x.

## Learning Objectives

- What Promises are, how, why, and when to use them
- How to use `.then()`, `.resolve()`, `.catch()` methods
- How to use every method of the Promise object
- How to use `throw` / `try` / `catch`
- How to use the `finally` operator
- How to use `async` and `await`

## Requirements

- All files executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Code uses the `.js` extension
- Tested with Jest: `npm run test`
- Linted with ESLint: `npm run check-lint`
- All functions must be exported

## Setup

```bash
npm install
```

## Tasks

| File | Description |
|---|---|
| `0-promise.js` | Return a Promise |
| `1-promise.js` | Resolve or reject based on boolean |
| `2-then.js` | Attach `.then` / `.catch` / `.finally` handlers |
| `3-all.js` | Handle multiple promises with `Promise.all` |
| `4-user-promise.js` | Simple resolved promise |
| `5-photo-reject.js` | Rejected promise with error |
| `6-final-user.js` | `Promise.allSettled` with status/value mapping |
| `7-load_balancer.js` | `Promise.race` load balancer |
| `8-try.js` | Throw error on divide by zero |
| `9-try.js` | Guardrail with try/catch/finally |
