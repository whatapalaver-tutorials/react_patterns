// ES5

// function add(x) {
//   return function anything(y) {
//    return x + y
//   };
// }

// ES6

// function add(x) {
//   return (y) => {
//    return x + y
//   };
// }

// implicit return on 1 line

// function add(x) {
//   return (y) => x + y;
// }

// const add = x => {
//   return (y) => x + y;
// }

const add = x => y => x + y;

const addFive = add(5);

let result = addFive(7); // should output 12

let alternativeResult = add(5)(7); // should output 12

console.log("addFive(7)", result);
console.log("TCL: alternativeResult", alternativeResult)
