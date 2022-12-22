//Write a fcuntion which helps to achive multily A and B and return product of A and B
// Create a curry function


// const multiply = (num1) => {
//   return (num2) => {
//     return num1 * num2;
//   };
// };



// const multiply = (num1) => (num2) => num1 * num2;

// console.log(multiply(2)(3));

const curry = function (fn) {
    var arity = fn.length
    console.log(arity);
    return function f1(...args){
        console.log(args);
        return fn(...args);
    }
}
const curriedSum = curry((a,b,c) => a + b + c);
console.log(curriedSum(1,2,3));

// DIDNT UNDERSTAND