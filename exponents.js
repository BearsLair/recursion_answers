function power(base, exponent) {
  if (exponent == 0) return 1;
  else return base * power(base, exponent - 1);
}

console.log(power(2, 0)); // 1
console.log(power(2, 2)); // 4
console.log(power(4, 3)); // 64
console.log(power(5, 7)); // 78,125
console.log(power(7, 10)); // 282,475,249
