// // FUNCTION IMPLEMENTATION
// const assertEqual = function(actual, expected) {
//   //let mesg = "qqqqq";
//   if (actual !== expected) {
//   //  mesg = "🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected;
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   } else {
//   //  mesg = "✅✅✅ Assertion Passed: " + actual + " === " + expected;
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   }
//   //console.log(mesg);
//   return;
// };

// const assertArrayEqual = function(array1, array2) {
//   assertEqual(eqArrays(array1, array2));
// };

const countLetters = function(str) {
  if (str.length === 0) {
    return undefined;
  } else {
    let count = 0;
    let result = {};
    for (let i = 0; i < str.length; i++) {
      //console.log(`${str.charAt(i)} and ${str.indexOf(str.charAt(i))} iloop`);
      if (str.charAt(i) !== " " && str.indexOf(str.charAt(i)) === i) {
        count = 0;
        for (let j = 0; j < str.length; j++) {
          //console.log(`Compare ${str.charAt(i)} with ${str.charAt(j)}`);
          if(str.charAt(i) !== " " && str.charAt(i) === str.charAt(j)) {
            count++;
            //console.log(`Compare ${str.charAt(i)} with ${str.charAt(j)} occures : ${count}`);
          } else if (str.charAt(i) !== " " && str.charAt(i) !== str.charAt(j)) {
            count += 0;
            //console.log(`${str.charAt(i)} not eaqual ${str.charAt(j)} occurance : ${count}`);
          }
        }
        result[str.charAt(i)] = count;
      }
    }
    return result;
  }
  };
  
  const sentence = "lighthouse in the house";//"lighthouse in the house";
  console.log(countLetters(sentence));
  
  //RESULT
  // {
  //   l: 1,
  //   i: 2,
  //   g: 1,
  //   h: 4,
  //   t: 2,
  //   o: 2,
  //   u: 2,
  //   s: 2,
  //   e: 3,
  //   n: 1,
  // }
  
  
  
  // TEST CODE
  // assertEqual(result1["Jason"], 1);
  // assertEqual(result1["Karima"], undefined);
  // assertEqual(result1["Fang"], 2);
  // assertEqual(result1["Agouhanna"], undefined);