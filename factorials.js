function factorial(n) {
  if (n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(4)); // 24
console.log(factorial(7)); // 5,040
console.log(factorial(12)); // 479,001,600
