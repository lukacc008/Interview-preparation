// Write code to get array of names from given array of users

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




// 
/////////////// SOLUTION NO. 1////////////////////
// const names = []
// for (let i = 0; i < users.length; i++) {
//     names.push(users[i].name)
// }
// console.log(names);
// console.log(users.length);


////////////// SOLUTION NO. 2////////////////////
// const names = [];
// users.forEach(user => {
//    names.push(user.name)
// });
// console.log(names);

///////////// SOLUTION NO. 3////////////////////   **** BEST SOLUTION****
const names = users.map((user) => user.name); 
console.log(names);