# recursive-comparator
Fast optimized algorithm to compare two variables of any type in JavaScript. The algorithm supports recursive 
comparison with nested items and performs the operations in a comparative way - so that in case of differences 
it automatically returns "false" instead of continuing to compare. The order of elements is taken into account 
in any operation.

To get the script just clone that repository (or get the version in "Releases" section) and import "compare" from "recursiveComparator.js" and use like the example:

```js
compare([], []); //True
compare([[1]], [[3]]); //False
compare([{a: 1}], [{a: 1}]); //True
compare({a: 1, b: 2}, {b: 2, a: 1}); //False
```

Test Results in Chrome 95.0.4638.54 64-bit:
<img src="https://i.imgur.com/WvxSS7t.png">

**You can also test by yourself executing the "test.html" file in the repository using Live Server or similar.**

Last version (1.1.0) changelog:
```
-> Add comparison possibilities to JavaScript "Set" and "Map" constructor based objects
-> Add comparison possibilities to "function" JavaScript primitive type (with limitations - check the code commented note)
-> Fix "object" comparation when objects with different values and equal keys were returning true in the comparison
```
