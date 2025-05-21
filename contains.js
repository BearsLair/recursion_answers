var nestedObject = {
  data: {
    info: {
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
  console.log("Current item: ", item);
  if (typeof nestedObject !== "object" || nestedObject === null) {
    return;
  }

  for (key in nestedObject) {
    console.log("made it to for loop");
    console.log("Current key: ", key);
    if (nestedObject[key] === item) {
      console.log("found the item at key: ", key);
      return true;
    } else if (contains(nestedObject[key], item) === true) {
      console.log("found the key nested");
      return true;
    }
  }

  return false;
}

console.log(contains(nestedObject, 44));
console.log("---------------------------");
console.log(contains(nestedObject, "foo"));
