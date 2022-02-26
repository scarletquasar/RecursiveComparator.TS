# RecursiveComparator.TS

<small>v2.0.0</small>

Simplified algorithm to compare two variables of any type. This repository can be cloned
and the code converted to vanilla JavaScript. 

## Installation:

- Clone this repository or copy the "recursiveComparator.ts" file content
- Optional: convert the code to JavaScript using a transpilation tool like [Babel](https://babeljs.io/docs/en/)
- Use it in your application by importing "compare" from "path/to/file"

## Usage:

`compare(variable1, variable2, filterFunction)`

Example:

```ts
compare(1, 2, (a, b) => a === b); //False
compare(1, 2, (a, b) => a !== b); //True
```

