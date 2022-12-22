// Sort the array of numbers
// const arr = [3,5,1]
// const result= arr.sort((a, b) => (a < b ? -1 : 1));
// console.log(arr,result);

// const arr = [3,5,1]
// const result= arr.sort((a, b) => a - b);   SORTIRA OD MANJEG KA VECEM
// console.log(arr,result);

// const arr = [3,5,1,7,2,10,50]
// const result= arr.sort((a, b) => b - a);   SORTIRA OD VECEG KA MANJEM
// console.log(result);

// SORT ARRAY OF OBJECTS BY AUTHORS LASTNAME

const books = [
  { name: "Harry Potter", author: "Joanne Rowling" },
  { name: "Warcross", author: "Marie Lu" },
  { name: "The Hunger Games", author: "Suzanne Collins" },
];

books.sort((book1, book2) => {
  const authorLastName1 = book1.author.split(" ")[1];
  const authorLastName2 = book2.author.split(" ")[1];
  return authorLastName1 < authorLastName2 ? -1 : 1;
});
console.log(books);
