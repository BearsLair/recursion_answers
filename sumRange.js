function sumRange(n) {
  if (n == 1) return n;
  else return n + sumRange(n - 1);
}

// Tests
console.log(sumRange(3)); // 6
console.log(sumRange(5)); // 15
console.log(sumRange(7)); // 28
console.log(sumRange(12)); // 78
