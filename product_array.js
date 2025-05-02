function productOfArray(arr) {
  if (arr.length == 1) {
    return arr[0];
  }

  if (arr.length > 1) {
    return arr[0] * productOfArray(arr.slice(1));
  }
}

// Test cases
console.log(productOfArray([1, 3, 9])); // 27
console.log(productOfArray([2, 7, 6, 9, 5])); // 3780
console.log(productOfArray([1, 2, 3, 4, 5, 6, 7])); // 5040
