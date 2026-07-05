# ES6_classes

## Holberton School / ALX — ES6 Classes Project

This project implements a series of ES6 classes covering constructors, getters/setters,
static methods, inheritance, abstract-class patterns, `Symbol.toStringTag`,
`Symbol.toPrimitive`, and common variable-hoisting/scoping bugs.

## Requirements

- Ubuntu 18.04 LTS
- NodeJS 12.11.x
- All files end with a new line
- Code uses the `.js` extension
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
| 0 | `0-classroom.js` | `ClassRoom` class storing `_maxStudentsSize`. |
| 1 | `1-make_classrooms.js` | `initializeRooms` — returns 3 `ClassRoom` instances (19, 20, 34). |
| 2 | `2-hbtn_course.js` | `ALXCourse` class with type-checked getters/setters for `name`, `length`, `students`. |
| 3 | `3-currency.js` | `Currency` class with `displayFullCurrency()`. |
| 4 | `4-pricing.js` | `Pricing` class with `displayFullPrice()` and static `convertPrice()`. |
| 5 | `5-building.js` | Abstract-style `Building` class that forces subclasses to implement `evacuationWarningMessage`. |
| 6 | `6-sky_high.js` | `SkyHighBuilding` — extends `Building`, overrides `evacuationWarningMessage`. |
| 7 | `7-airport.js` | `Airport` class using `Symbol.toStringTag` for its string description. |
| 8 | `8-hbtn_class.js` | `ALXClass` using `Symbol.toPrimitive` to cast to `Number`/`String`. |
| 9 | `9-hoisting.js` | Fixed version of buggy hoisting/scoping code (`ALXClass`, `StudentALX`, `listOfStudents`). |
| 10 | `10-car.js` | `Car` class with a `cloneCar()` method that returns a new instance of the same (sub)class. |

Each task also has a matching `N-main.js` demo file (taken directly from the assignment
instructions) and an `N-*.test.js` Jest test file that verifies the implementation.

## Notes on task 9 (Hoisting)

The original buggy snippet had four separate issues, all fixed in `9-hoisting.js`:

1. `ALXClass` and `StudentALX` were used before they were declared — `class` declarations
   are **not** hoisted the way `function` declarations are, so the class definitions were
   moved above their first use.
2. `StudentALX`'s constructor didn't accept an `alxClass` parameter, even though the body
   referenced it — the parameter was added: `constructor(firstName, lastName, alxClass)`.
3. The `alxClass` getter incorrectly returned `this.alxClass` (infinite recursion) instead
   of `this._alxClass`.
4. `fullStudentDescription` referenced an undefined `self` instead of `this`.

## Notes on task 5 (Building)

`Building` is meant to act like an abstract class: it can be instantiated directly, but
any subclass **must** override `evacuationWarningMessage`, otherwise the constructor
throws:

```
Error: Class extending Building must override evacuationWarningMessage
```

This is implemented using `new.target` to detect that a subclass (not `Building` itself)
is being constructed, combined with a check that `evacuationWarningMessage` exists on the
instance's prototype chain.

## Notes on task 10 (Car / cloneCar)

`cloneCar()` returns `new this.constructor()` so that:
- The returned object is an instance of the same (sub)class as the original (`instanceof`
  works correctly even for classes that extend `Car` without overriding the constructor).
- The clone's attributes are `undefined` (matching the assignment's expected output),
  since no constructor arguments are passed.
- The clone is a distinct object (`tc1 === tc2` is `false`).

## A note on `npm run full-test` and the demo `N-main.js` files

Two of the assignment's own example demo scripts intentionally use patterns that Airbnb's
ESLint config flags:

- `5-main.js` calls `new TestBuilding(200)` purely for its side effect (to trigger/catch
  the thrown error) — `no-new`.
- `10-main.js` uses `tc1 == tc2` (loose equality) exactly as given in the assignment
  instructions — `eqeqeq`.

Both snippets are reproduced verbatim from the assignment brief so that running them
produces the exact documented output. All actual implementation files (`0-classroom.js`
through `10-car.js`) and all test files are 100% lint-clean.

Also note: Airbnb's `import/extensions` rule normally forbids `.js` extensions in import
statements, but this assignment explicitly requires imports written as
`import X from './file.js'`. The `.eslintrc.js` in this project overrides that single rule
(`'import/extensions': ['error', 'ignorePackages']`) so the required import style and a
clean lint run can coexist; every other Airbnb rule from the assignment's supplied config
is left untouched.

## Author

Jesse — ALU / ALX Software Engineering program.
