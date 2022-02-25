# RecursiveComparator.ts

Simplified algorithm to compare two variables of any type. This repository can be cloned
and the code converted to vanilla JavaScript. 

## Installation:

- Clone this repository or copy the "recursiveComparator.ts" file content
- Optional: convert the code to JavaScript using a transpilation tool like [Babel](https://babeljs.io/docs/en/)
- Use it in your application

## Usage:

`compare(variable1, variable2, filterFunction)`

Example:

```ts
compare([{a: 1}], [{a: 1}], (a, b) => !compare(a, b)); //False
compare([{a: 1}], [{a: 1}], (a, b) => compare(a, b)); //True
```

