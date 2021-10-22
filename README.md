# recursive-comparator
Fast optimized algorithm to compare two variables of any type in JavaScript. The algorithm supports recursive 
comparison with nested items and performs the operations in a comparative way - so that in case of differences 
it automatically returns "false" instead of continuing to compare. The order of elements is taken into account 
in any operation.

To get the script just clone that repository and import "compare" from "recursiveComparator.js" and use like the example:

```js
compare([], []); //True
compare([[1]], [[3]]); //False
compare([{a: 1}], [{a: 1}]); //True
compare({a: 1, b: 2}, {b: 2, a: 1}); //False
```
