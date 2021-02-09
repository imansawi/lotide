// A FUNCTION ASSERTS THE ACTUAL VALUE EQUALSTO THE EXPECTED VALUE

const assertEqual = require('../assertEqual');  

assertEqual("Lighthouse Labs","Lighthouse Labs");
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

module.exports = assertEqual;