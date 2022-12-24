// Define a function that takes an array of strings, and returns the
// most commonly occurring string in that array.

const mostCommonString = (strings) => {
  const commonStrings = {};

  strings.forEach((str) => {
    if (commonStrings[str] === undefined) {
      commonStrings[str] = 1;
    } else {
      commonStrings[str]++;
    }
  });

  let maxEntry;
  let maxValue = 0;

  for (commonString in commonStrings) {
    if (commonStrings[commonString] > maxValue) {
      maxEntry = commonString;
      maxValue = commonStrings[commonString];
    }
  }

  return maxEntry;
};

// const mostFreqent = (arr) => {
//   const mapping = arr.reduce((acc, el) => {
//     acc[el] = acc[el] ? acc[el] + 1 : 1;    ////////// IDK
//     return acc;
//   }, {});
// };

console.log(mostCommonString(["a", "b", "c", "a", "b", "b", "b"]));
