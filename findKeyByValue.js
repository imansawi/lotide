const assertEqual = function(actual, expected) {
  //let mesg = "qqqqq";
  if (actual !== expected) {
  //  mesg = "🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected;
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
  //  mesg = "✅✅✅ Assertion Passed: " + actual + " === " + expected;
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  //console.log(mesg);
  return;
};

const eqArrays = function(array1, array2, ) {
  let isEqual = true;  
  if ((array1.length !== 0) && (array2.length !== 0) && (array1.length === array2.length)) {
    for (i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        isEqual = false;
        break;
      }
    }
  } else {
    isEqual = false;
  }
  return isEqual;
};    

const assertArraysEqual = function(array1, array2) {
  assertEqual(eqArrays(array1, array2));
};


const findKeyByValue = function(myObject, value) {
const keysArr = Object.keys(myObject);
let item0 = undefined;
for (const item of keysArr) {
  if (myObject[item] === value) {
    item0 = item;
  }
}
return item0;
};

//TEST CODE
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
console.log(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"));

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);