// Function counts a specific subset of items taken from a collection of them and returns their count1
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

const assertArrayEqual = function(array1, array2) {
  assertEqual(eqArrays(array1, array2));
};

const countOnly = function(allItems, itemsToCount) {
  if (allItems.length === 0) {
    return undefined;
  } else {
    let countedItems = {};
    for (let item in itemsToCount) {
      let count = 0;
      for (let i = 0; i < allItems.length; i++) {
        if (item === allItems[i] && itemsToCount[item] === true) {
          count++;
        }
      }
      if (itemsToCount[item] === true && count > 0) {
        countedItems[item] = count;
      }
    }
    return countedItems;
  }
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log(result1);

// TEST CODE
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);