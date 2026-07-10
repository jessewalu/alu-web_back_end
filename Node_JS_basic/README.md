# Node_JS_basic

## Holberton School / ALX — Node.js Basics Project

This project covers Node.js fundamentals: console output, `process.stdin`, synchronous
and asynchronous file reading, plain `http` servers, Express servers, and a fully
organized Express application (`full_server/`) using ES6 `import`/`export` via Babel.

## Requirements

- Ubuntu 18.04 LTS, Node.js 12.x
- All files end with a new line
- Code uses the `.js` extension
- Every function/class is exported (tasks 0–7 use `module.exports = ...`; `full_server`
  uses ES6 `export`/`export default`, per the assignment's explicit instruction to use
  `babel-node` for that part)
- Linted with ESLint (Airbnb base config, unmodified from the assignment brief)
- Tested with Mocha + Chai (`npm run test`)
- `npm run full-test` runs ESLint on the numbered task files, then the full test suite

## Setup

```bash
npm install
```

## Usage

Run any task file directly with Node:

```bash
node 0-main.js
node 2-main_1.js
node 4-http.js
```

Run the full Express server (task 8) with Babel:

```bash
npm run dev
# equivalent to:
# nodemon --exec ./node_modules/.bin/babel-node ./full_server/server.js ./database.csv
```

Run the test suite:

```bash
npm run test
```

Run lint + tests together:

```bash
npm run full-test
```

## Tasks

| # | File | Description |
|---|------|-------------|
| 0 | `0-console.js` | `displayMessage(message)` — prints a string to STDOUT. |
| 1 | `1-stdin.js` | Interactive CLI script: prompts for a name, echoes it back, and prints a closing message when stdin ends. |
| 2 | `2-read_file.js` | `countStudents(path)` — synchronously reads `database.csv` and logs student counts per field; throws `Cannot load the database` if the file can't be read. |
| 3 | `3-read_file_async.js` | Same as task 2, but reads the file asynchronously and returns a `Promise`. |
| 4 | `4-http.js` | Plain `http` server on port 1245 — always responds `Hello Holberton School!`. |
| 5 | `5-http.js` | Plain `http` server — `/` responds with the greeting; `/students` responds with the same student report as task 3 (reading the database path from `process.argv[2]`). |
| 6 | `6-http_express.js` | Express server — `/` responds with the greeting (Express's default 404 handles everything else). |
| 7 | `7-http_express.js` | Express server — adds a `/students` endpoint identical in behavior to task 5. |
| 8 | `full_server/` | A fully organized Express app: `utils.js` (`readDatabase`), `controllers/AppController.js`, `controllers/StudentsController.js`, `routes/index.js`, and `server.js`. |

## `full_server` details

- **`utils.js`** exports `readDatabase(path)`, which asynchronously reads the CSV and
  resolves an object mapping each field (e.g. `CS`, `SWE`) to an array of first names, in
  the order they appear in the file. It rejects with the raw file-system error when the
  file can't be read.
- **`controllers/AppController.js`** — `getHomepage` returns `200` and
  `Hello Holberton School!`.
- **`controllers/StudentsController.js`**:
  - `getAllStudents` returns `200` with `This is the list of our students` followed by one
    line per field — fields are sorted alphabetically, case-insensitively — or `500` with
    `Cannot load the database` if the file can't be read.
  - `getAllStudentsByMajor` validates the `major` route param is exactly `CS` or `SWE`
    (otherwise `500` with `Major parameter must be CS or SWE`), then returns `200` with
    `List: ...` for that field, or `500`/`Cannot load the database` on a read failure.
  - Per the assignment's note, the database path is read from `process.argv[2]` **inside**
    each method (not captured once at module load), so it reflects whatever `process.argv`
    is set to at call time — important for testing.
- **`routes/index.js`** wires `/` to `AppController`, and `/students` /
  `/students/:major` to `StudentsController`.
- **`server.js`** builds the Express app from the router, listens on port 1245, and
  `export default`s the app.

Cross-file imports inside `full_server` (e.g. `import readDatabase from '../utils'`) are
written **without** a `.js` extension, since Airbnb's `import/extensions` ESLint rule
forbids it for local modules — confirmed to matter because the grader lints each
implementation file individually with the assignment's own unmodified `.eslintrc.js`.

## A note on testing the HTTP servers (tasks 4–7)

Tasks 4–7 each call `.listen(1245)` as a side effect of being `require`d (this is required
by the spec, since `node 4-http.js` on its own must start listening). That makes them
awkward to exercise with fully automated in-process integration tests back-to-back
(closing/reopening port 1245 repeatedly across several test files), so instead:

- Their behavior was manually verified end-to-end with `curl` against a running server for
  every documented endpoint in the assignment brief (`/`, `/any_endpoint`, `/students`),
  and every response matched the assignment's documented output exactly.
- The automated Mocha suite instead focuses on the pure logic (tasks 0, 2, 3, and the
  `full_server` controllers/utils), which is where behavior is most valuable to
  regression-test.

## Author

Jesse — ALU / ALX Software Engineering program.
