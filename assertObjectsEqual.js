const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
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

const eqObjects = function(object1, object2) {
  let keysArrayObj1 = Object.keys(object1), keysArrayObj2 = Object.keys(object1);
  let valuesArrayObj1 = Object.values(object1), valuesArrayObj2 = Object.values(object2);  
  if (eqArrays(keysArrayObj1.sort(), keysArrayObj2.sort()) && eqArrays(valuesArrayObj1.sort(), valuesArrayObj2.sort())) {
    return true;
  } else {
    return false;
  }
};  

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false

const assertObjectsEqual = function(object1, object2) {
  return assertEqual(eqObjects(object1, object2), true);
};

assertObjectsEqual(ab, ba);

assertObjectsEqual(ab, abc);