// A FUNCTION RETURNS COUNT OF ITEMSWITH A SPECIFIC CONDITION

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

module.exports = letterPositions;

//TESTING
// const sstr = "hello";//"lighthouse in the house";
// console.log(letterPositions(sstr));


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