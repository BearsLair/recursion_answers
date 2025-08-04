function totalIntegers(arr) {
  console.log("Array/Number being assessed: ", arr);
  if (arr.length == 0) {
    console.log("Empty array!");
    return 0;
  }
  let total = 0;

  // This line changes the original arr.
  // And the changed arr is used in the call in the return statment,
  // facilitating the recursion loop.
  let shift = arr.shift();

  if (Array.isArray(shift)) {
    console.log("This is an array, needs breaking down.");
    total += totalIntegers(shift);
  } else if (Number.isInteger(shift)) {
    console.log("Is a number, add 1 to the total.");
    total += 1;
  }

  return total + totalIntegers(arr);
}

console.log(totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]])); // 7
