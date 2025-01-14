function foo(a, b) {
  if (!a || !b) {
    return 0; // Correct: handles all falsy values
  }
  return a + b;
}

console.log(foo(0, 1)); // 0
console.log(foo(1, 0)); // 0
console.log(foo(null, 1)); // 0
console.log(foo(1, false)); // 0
console.log(foo(1, "")); // 0
console.log(foo(1,undefined)); //0