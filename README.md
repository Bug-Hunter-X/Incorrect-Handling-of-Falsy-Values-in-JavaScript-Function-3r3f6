# Incorrect Handling of Falsy Values in JavaScript Function

This repository demonstrates a common bug in JavaScript where a function incorrectly handles falsy values. The `foo` function is intended to add two numbers, but it only explicitly checks if either input is strictly equal to 0. This leads to errors when falsy values like `null`, `false`, `undefined`, or an empty string are passed as arguments.

The `bug.js` file contains the buggy code. The `bugSolution.js` file demonstrates the corrected version which handles falsy values appropriately using loose comparison.