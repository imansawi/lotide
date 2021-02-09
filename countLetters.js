// A FUNCTION COUNTS THE LETTERS IN A STRING

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

module.exports = countLetters;