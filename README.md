# Recursive Comparator
Fast optimized algorithm to compare two variables of any type in JavaScript. The algorithm supports recursive 
comparison with nested items and performs the operations in a comparative way - so that in case of differences 
it automatically returns "false" instead of continuing to compare. The order of elements is taken into account 
in any operation. The function also supports comparison functions that will dictate the behavior the comparator 
will use to check the data.

## Versions

| Version | Branch |
| ------- | ------ |
| development | main |
| 1.1.6 | v1.1.6 |

# Installation/Usage
To get the script just clone that repository (or get the version in "Releases" section) and import "compare" from "recursiveComparator.js" and use like the examples:

Without conditional function parameter:

<details>

```js
compare([{a: 1}], [{a: 1}]); //(May be equal) True
compare([[1]], [[3]]); //(May be equal) False
```

</details>

With conditional function parameter:

<details>

```js
compare([{a: 1}], [{a: 1}], (a, b) => !compare(a, b)); //(May pass in the function parameters) False
compare([{a: 1}], [{a: 1}], (a, b) => compare(a, b)); //(May pass in the function parameters) True
```

</details>

# Information
<a href="./info/Changelog.md">Changelog</a> - <a href="./info/TestResults.md">Test Results</a>


