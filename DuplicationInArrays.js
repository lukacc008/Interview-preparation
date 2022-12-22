// Remove all duplicates in the array

// const uniqueArr = (arr) => {
//     return[...new Set(arr)];     BEST SOLUTION
// };




// const uniqueArr = (arr) => {
//   const result = [];
//   arr.forEach((item) => {
//     if (!result.includes(item)) {
//       result.push(item);              SECOND BEST
//     }
//   });
//   return result;
// };
// console.log(uniqueArr([1,1,2]))





// const uniqueArr = arr => {
//     return arr.reduce((acc, el) => {
//       return acc.inclueds(el) ? acc : [...acc, el];    THIRD BEST
//     }, [])
// }