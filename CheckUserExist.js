// Check that user with such name exists in array of objects

const users = [
  {
    id: 1,
    name: "Jack",
    isActive: true,
  },
  {
    id: 2,
    name: "John",
    isActive: true,
  },
  {
    id: 3,
    name: "Mike",
    isActive: false,
  },
];



const isNameExists = (name, arr) => {
  const el = arr.find((el) => el.name === name);
  return Boolean(el);
};
console.log(el);





////////////////// SECOND SOLUTION NEED TO WORK ON IT /////////////////////
//const isNameExists = (name , arr) => arr.some((el) => el.name === name);



///////////////// FIRST SOLUTION NOT GREAT /////////////////
// const isNameExists = (name, users) => {
//   let exists = false;
//   for (let i = 0; i < users.length; i++) {
//     if (users[i].name === name) {
//       exists = true;
//     }
//   }
//   return exists;
// };
// console.log(isNameExists("Luka", users));
