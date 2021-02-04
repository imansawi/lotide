// FUNCTION IMPLEMENTATION
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

const letterPositions = function(str) {
if (str.length === 0) {
  return undefined;
} else {
  let count = 0;
  let locationArr = [];
  let result = {};
  for (let i = 0; i < str.length; i++) {
    //console.log(`${str.charAt(i)} and ${str.indexOf(str.charAt(i))} iloop`);
    if (str.charAt(i) !== " " && str.indexOf(str.charAt(i)) === i) {
      count = 0;
      locationArr = [];
      for (let j = 0; j < str.length; j++) {
        //console.log(`Compare ${str.charAt(i)} with ${str.charAt(j)}`);
        if(str.charAt(i) !== " " && str.charAt(i) === str.charAt(j)) {
          count ++;
          locationArr.push(j);
            //console.log(`Compare ${str.charAt(i)} with ${str.charAt(j)} occures : ${count}`);
        } else if (str.charAt(i) !== " " && str.charAt(i) !== str.charAt(j)) {
          count += 0;
          //console.log(`${str.charAt(i)} not eaqual ${str.charAt(j)} occurance : ${count}`);
        }
      }
      result[str.charAt(i)] = locationArr;
    }
  }
  return result;
}   
};


//TESTING
const sstr = "hello";//"lighthouse in the house";
console.log(letterPositions(sstr));


//RESULT
// { 
//   l: [0],
//   i: [1, 11],
//   g: [2],
//   h: [3, 5, 15, 18],
//   t: [4, 14],
//   o: [6, 19],
//   u: [7, 20],
//   s: [8, 21],
//   e: [9, 16, 22],
//   n: [12]
// }

// const sentence = "hello";
// const result1 = {};
// return result1;
// result1 = letterPositions(sentence);

console.log(assertArraysEqual(letterPositions("hello").h, [0]));
console.log(assertArraysEqual(letterPositions("hello").e, [1]));
console.log(assertArraysEqual(letterPositions("hello").l, [2, 3]));
console.log(assertArraysEqual(letterPositions("hello").o, [4]));
