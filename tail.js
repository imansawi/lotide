// FUNCTION RETURNS TAIL OF AN ARRAY
const tail = function(myArray) {
  if (myArray.length > 0) {
    let x = myArray.shift();
    x = "";
    return myArray;
  }
};

console.log(tail(["Welcome!", "Lighthouse", "Labs","Bootcamp"]));

module.exports = tail;