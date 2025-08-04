var l = [1, 2, 3];
console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [[1, 2], 3];
console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [[[[[[[[[1]]]]]]]]];
console.log(SumSquares(l)); // 1 = 1

l = [10, [[10], 10], [10]];
console.log(SumSquares(l)); // 100 + 100 + 100 + 100 = 400

function SumSquares(element) {
  // Base Case
  if (element.length == 0) {
    return 0;
  }

  let total = 0;
  let first = element[0];

  if (Array.isArray(first)) {
    total += SumSquares(first);
  } else if (Number.isInteger(element)) {
    return element ** 2;
  }

  return total + SumSquares(element);
}
