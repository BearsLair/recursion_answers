var l = [1, 2, 3];
console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [[1, 2], 3];
console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [[[[[[[[[1]]]]]]]]];
console.log(SumSquares(l)); // 1 = 1

l = [10, [[10], 10], [10]];
console.log(SumSquares(l)); // 100 + 100 + 100 + 100 = 400

function SumSquares(element) {
  console.log(element);
  // Base Case
  if (element.length == 0) {
    return 0;
  }

  let total = 0;
  let first = element.shift();
  console.log("first: ", first);

  if (Array.isArray(first)) {
    console.log("Is array.");
    total += SumSquares(first);
  } else if (Number.isInteger(first)) {
    console.log("Is integer.");
    total += first ** 2;
  }

  return total + SumSquares(element);
}
