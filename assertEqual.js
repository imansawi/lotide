// FUNCTION TESTS IF TWO ARGUMENTS ARE EQUAL
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  return;
};

//assertEqual("Lighthouse Labs","Bootcamp");
//assertEqual("Lighthouse Labs","Lighthouse Labs");

module.exports = assertEqual;
