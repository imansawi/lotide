const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  return;
};

const eqArrays = function(array1, array2) {
  if (array1 === undefined || array2 === undefined) {
    if (array1 === undefined && array2 === undefined) {
      return true;
    }
    return false;
  }
  if (array1.length !== 0 &&
    array2.length !== 0 &&
    array1.length === array2.length) {
    let arr1 = array1.sort();
    let arr2 = array2.sort();
    for (let i = 0; i < array1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
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