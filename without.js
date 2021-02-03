const without = function(sourceArray, itemsToRemoveAarray) {
  let newArray = [];
  for (let i = 0; i < sourceArray.length; i++) {
    if (!itemsToRemoveAarray.includes(sourceArray[i])) {
      newArray.push(sourceArray[i]);
    }
  }
  return newArray;
};

console.log(without(["hello", "world", "lighthouse"], ["lighthouse"]));
console.log(without([1, 2, 3], [1]));  // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"]));  // => ["1", "2"]

const eqArrays = function(array1, array2) {
  if (
    array1.length !== 0 &&
    array2.length !== 0 &&
    array1.length === array2.length
  ) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};

const assertEqual = function(passed) {
  if (passed === true) {
    console.log("✅✅✅ Assertion Passed!");
  } else {
    console.log("🛑🛑🛑 Assertion Failed!");
  }
};

// no need to capture return value for this test case
// Make sure the original array was not altered by the without function
//assertArraysEqual(words, ["hello", "world", "lighthouse"]);