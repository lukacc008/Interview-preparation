//Write code to get array of names from given array of users
//Get back only active users
//Sort users by age Descending

const users = [
  {
    id: 1,
    name: "Jack",
    isActive: true,
    age: 20,
  },
  {
    id: 2,
    name: "John",
    isActive: true,
    age: 18,
  },
  {
    id: 3,
    name: "Mike",
    isActive: false,
    age: 30,
  },
];

///////////// SOLUTION NO. 1 /////////////////

// users.sort((user1,user2) => (user1.age < user2.age ? 1 : -1))
// const names = [];
// for (let i = 0; i < users.length; i++) {
//     if (users[i].isActive) {
//         names.push(users[i].name);
//     }
// }
// console.log(names);

//////////// SOLUTION NO. 2 /////////////////

const names = users
  .sort((user1, user2) => (user1.age < user2.age ? 1 : -1))
  .filter((user) => user.isActive)
  .map((user) => user.name);

  console.log(names);