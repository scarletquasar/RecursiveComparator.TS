import { compare } from "./recursiveComparator.js"
window.compare = compare;
// var test_length = 10000000;
// console.log("Starting 'recursiveComparator' vs 'JSON.stringify' vs 'Array.every loop' comparation performance check. Test length: " + test_length);

// var target_a = Array.from({length: test_length});

// var target_b = Array.from({length: test_length});

// var target_c = Array.from({length: 100});

// //Test Start
// var iRecursiveComparatorTimer = performance.now();

// console.log("[RComparator] (Expected true) target_a equals target_b: " + compare(target_a, target_b));
// console.log("[RComparator] (Excepted false) target_a equals target_c: " + compare(target_a, target_c));

// var fRecursiveComparatorTimer = performance.now();

// console.warn("The duration time of the operation with 'recursiveComparator' was: " + (fRecursiveComparatorTimer - iRecursiveComparatorTimer)  + "ms");

// var iJsonTimer = performance.now();

// console.log("[JSON.stringify] (Expected true) target_a equals target_b: " + (JSON.stringify(target_a) === JSON.stringify(target_b))); //Expected true
// console.log("[JSON.stringify] (Excepted false) target_a equals target_c: " + (JSON.stringify(target_a) === JSON.stringify(target_c))); //Expected false

// var fJsonTimer = performance.now();

// console.warn("The duration time of the operation with 'JSON.stringify' was: " + (fJsonTimer - iJsonTimer) + "ms");

// var iEvery = performance.now();

// console.log("[Array.every] (Expected true) target_a equals target_b: " +
// target_a.every(function (element) {
//     return target_b.includes(element);
// }));

// console.log("[Array.every] (Expected false) target_a equals target_c: " +
// target_a.every(function (element) {
//     return target_c.includes(element);
// }));

// var fEvery = performance.now();

// console.warn("The duration time of the operation with 'Array.every loop' was: " + (fEvery - iEvery) + "ms");
