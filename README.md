# Recursive Comparator
Fast optimized algorithm to compare two variables of any type in JavaScript. The algorithm supports recursive 
comparison with nested items and performs the operations in a comparative way - so that in case of differences 
it automatically returns "false" instead of continuing to compare. The order of elements is taken into account 
in any operation.

## Versions

| Version | Branch |
| ------- | ------ |
| development | main |
| 1.1.6 | v1.1.6 |

# Installation
To get the script just clone that repository (or get the version in "Releases" section) and import "compare" from "recursiveComparator.js" and use like the example:

```js
compare([{a: new Set()}], [{a: new Set()}]); //True
compare([{a: 1}], [{a: 1}]); //True
compare([], []); //True
compare({a: 1}, new Map([["a", 1]])); //False
compare({a: 1, b: 2}, {b: 2, a: 1}); //False
compare([{a: 3}], [{a: 1}]); //False
compare({}, new Map()); //False
compare([[1]], [[3]]); //False
```

# Information
<a href="./info/Changelog.md">Changelog</a> - <a href="./info/TestResults.md">Test Results</a>


