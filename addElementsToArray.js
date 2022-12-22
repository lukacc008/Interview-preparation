// Write a function which gets an array and an element and returns an
// array with this element at the end.

const numbers = [1,2]
const niz = (arr, el) => {
    return [...arr, el];
 // arr.push(el);
 // return arr;
};

const newNumbers = niz(numbers, 3);
console.log(newNumbers);
console.log(numbers);

