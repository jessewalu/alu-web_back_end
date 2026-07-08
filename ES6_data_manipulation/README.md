# ES6_data_manipulation

## Holberton School / ALX — ES6 Data Manipulation Project

This project implements a series of functions that manipulate arrays, typed arrays,
`Set`, and `Map` data structures using ES6 features (`map`, `filter`, `reduce`, spread,
`DataView`/`ArrayBuffer`, `Set`, `Map`).

## Requirements

- Ubuntu 18.04 LTS
- NodeJS 12.11.x
- All files end with a new line
- Code uses the `.js` extension
- All functions are exported (`export default function ...`)
- Tested with **Jest** (`npm run test`)
- Linted with **ESLint** using the Airbnb base config (`npm run lint`)
- `npm run full-test` runs ESLint then Jest on the whole project

## Setup

```bash
npm install
```

## Usage

Run any task's demo file with Babel:

```bash
npm run dev 0-main.js
```

Run the full test suite:

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
| 0 | `0-get_list_students.js` | `getListStudents` — returns a hardcoded array of 3 student objects (`id`, `firstName`, `location`). |
| 1 | `1-get_list_student_ids.js` | `getListStudentIds` — uses `map` to return an array of student ids; returns `[]` if the argument isn't an array. |
| 2 | `2-get_students_by_loc.js` | `getStudentsByLocation` — uses `filter` to return students located in a given city. |
| 3 | `3-get_ids_sum.js` | `getStudentIdsSum` — uses `reduce` to sum all student ids. |
| 4 | `4-update_grade_by_city.js` | `updateStudentGradeByCity` — combines `filter` and `map` to attach a grade (or `'N/A'`) to each student in a given city. |
| 5 | `5-typed_arrays.js` | `createInt8TypedArray` — builds an `ArrayBuffer`/`DataView` and writes an Int8 value at a position, throwing `Position outside range` if the position is invalid. |
| 6 | `6-set.js` | `setFromArray` — builds a `Set` from an array. |
| 7 | `7-has_array_values.js` | `hasValuesFromArray` — checks whether every element of an array exists in a `Set`. |
| 8 | `8-clean_set.js` | `cleanSet` — builds a `-`-joined string of set values (stripped of a given prefix) that start with that prefix. |
| 9 | `9-groceries_list.js` | `groceriesList` — returns a hardcoded `Map` of grocery items and quantities. |
| 10 | `10-update_uniq_items.js` | `updateUniqueItems` — updates every `Map` entry with quantity `1` to `100`, throwing `Cannot process` if the argument isn't a `Map`. |

Each task also has a matching `N-main.js` demo file (taken directly from the assignment
instructions) and an `N-*.test.js` Jest test file that verifies the implementation.

## Implementation notes

- **Task 1 (`getListStudentIds`)** explicitly checks `Array.isArray(students)` before
  calling `.map`, returning `[]` immediately for non-array input (e.g. a string).
- **Task 4 (`updateStudentGradeByCity`)** filters students down to the requested city,
  then maps each one to a new object (via spread) with a `grade` field looked up from
  `newGrades` by `studentId`, defaulting to `'N/A'` when no match is found.
- **Task 5 (`createInt8TypedArray`)** validates `position` against `[0, length)` before
  writing, throwing `Error('Position outside range')` for an out-of-bounds position —
  matching the exact wording required by the assignment.
- **Task 8 (`cleanSet`)** returns an empty string immediately when `startString` is falsy
  (e.g. `''`), matching the assignment's documented output. Otherwise, every set value
  that starts with `startString` has that prefix stripped and the remaining pieces are
  joined with `-`.
- **Task 10 (`updateUniqueItems`)** mutates the map in place (matching the assignment's
  example, which logs the same `map` variable before and after the call) and also returns
  it. It throws `Error('Cannot process')` when the argument is not a `Map` instance.

## A note on lint and the demo `N-main.js` / test files

Per the assignment's grading behavior, only the numbered **implementation** files
(`0-get_list_students.js` through `10-update_uniq_items.js`) are linted individually
(e.g. `eslint "4-update_grade_by_city.js"`), using the exact `.eslintrc.js` supplied in
the assignment brief, unmodified. Every implementation file passes this check with zero
errors.

The `N-main.js` demo files (reproduced verbatim from the assignment brief, importing task
files with a `.js` extension, e.g. `import getListStudents from "./0-get_list_students.js"`)
and this project's own `N-*.test.js` files are **not** part of that graded lint check —
Airbnb's `import/extensions` rule would otherwise flag the `.js` extension in those import
statements. None of the actual implementation files import one another, so this doesn't
affect their lint cleanliness at all.

## Author

Jesse — ALU / ALX Software Engineering program.
