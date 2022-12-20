// Get back only active users.

const users = [
    {
        id: 1,
        name: "Jack",
        isActive: true
    },
    {
        id: 2,
        name: "John",
        isActive: true
    },
    {
        id: 3,
        name: "Mike",
        isActive: false
    },
];

///////////// SOLUTION NO. 1 //////////////
// const names = [];
// for (let i = 0; i < users.length; i++) {
//     if (users[i].isActive) {
//         names.push(users[i].name);
//     }
// }
// console.log(names);

//////////// SOLUTION NO. 2 ////////////////   *** BEST SOLUTION ***
const names = users.filter(user => user.isActive).map((user) => user.name);
console.log(names);