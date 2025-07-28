// Test nested object
var nestedObject = {
  data: {
    info: {
      goofball: "Patrick",
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};

function contains(nestedObject, item) {
  if (typeof nestedObject !== "object" || nestedObject === null) {
    return;
  }

  for (key in nestedObject) {
    if (nestedObject[key] === item) {
      return true;
    } else if (contains(nestedObject[key], item) === true) {
      return true;
    }
  }

  return false;
}

// Test cases using nestedObject
console.log("NestedObject contains 44: ", contains(nestedObject, 44));
console.log("---------------------------");
console.log("NestedObject contains 'foo': ", contains(nestedObject, "foo"));
console.log("---------------------------");
console.log("NestedObject contains 'foo2': ", contains(nestedObject, "foo2"));
console.log("---------------------------");
console.log(
  "NestedObject contains 'Patrick': ",
  contains(nestedObject, "Patrick")
);
