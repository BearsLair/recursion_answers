function totalIntegers(arr, acc = 0) {
  console.log(arr);

  // Base case
  if (typeof arr == "number") {
    console.log("arr is a number, +1");
    return acc + 1;
  } else {
    arr.map((item) => {
      if (typeof item == "number") {
        console.log("Item in array is a number, +1");
        acc + 1;
      } else if (Array.isArray(item)) {
        console.log("Item is a non-empty array");
        acc + totalIntegers(item);
      }
    });

    return acc;
  }
}

console.log(
  totalIntegers(totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]))
); // 7
