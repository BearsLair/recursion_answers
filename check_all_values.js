const allAreLessThanSeven = (num) => num < 7;

function all(array, callback, index = 0) {
  const maxIndex = array.length - 1;

  // Recursive base case
  if (index === maxIndex) {
    if (callback(array[index]) === true) return true;
    else return false;
  }

  // If first element is false, return false, no need for recursion
  if (callback(array[0]) === false) {
    return false;
  }

  // recursively work through array to base case if first element is true
  if (
    all(array, callback, index + 1) === true &&
    callback(array[index]) === true
  )
    return true;
  else return false;
}

console.log(all([1, 3, 5], allAreLessThanSeven)); // true

console.log(all([3, 5, 9], allAreLessThanSeven)); // false

console.log(all([9, 3, 2, 5], allAreLessThanSeven)); // false

console.log(all([1, 3, 4, 10], allAreLessThanSeven)); // false

console.log(all([1, 9, 3, 4], allAreLessThanSeven)); // false

console.log(all([1, 3, 18, 2], allAreLessThanSeven)); // false
