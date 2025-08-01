function totalIntegers(arr) {
  let total = 0;

  if (Array.isArray(arr) == true && arr.length == 0) {
    return 0;
  } else if (Array.isArray(arr) == false && typeof arr == "number") {
    return 1;
  } else {
    arr.map((item) => {
      if (Array.isArray(item)) {
        total += totalIntegers(item);
      }
    });
  }
  return total;
}

console.log(
  totalIntegers(totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]))
); // 7
