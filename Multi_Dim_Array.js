function totalIntegers(arr) {
  console.log(arr);
  if (Array.isArray(arr) && arr.length == 0) {
    return 0;
  } else if (Number.isInteger(arr)) {
    return 1;
  } else if (Number.isInteger(arr) == false) {
    return 0;
  }

  let total = 0;
  let shift = arr.shift();
  console.log(shift);

  if (Array.isArray(shift)) {
    total + totalIntegers(shift);
  }

  return total;
}

console.log(
  totalIntegers(totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]))
); // 7
