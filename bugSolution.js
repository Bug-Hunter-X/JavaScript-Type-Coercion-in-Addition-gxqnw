function foo(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else {
    console.error('Invalid input: both arguments must be numbers');
    return NaN; // Or throw an error
  }
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(1, '2')); // Output: Invalid input: both arguments must be numbers
NaN