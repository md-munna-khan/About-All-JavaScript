// // when we use array of object?
// // when we need many information in one object then we use array of object


// const p1={
//     name :"munna",
//     age:12
// }
// const p2={
//     name :"sollu",
//     age:156
// }
// const p3={
//     name :"masud",
//     age:23
// }
// const p4={
//     name :"sazid",
//     age:45
// }
// const people = [p1,p2,p3,p4];
// console.log(people[0].name) // munna
// console.log(people[1].age)  // 156
// output
// [
//   { name: 'munna', age: 12 },
//   { name: 'sollu', age: 156 },
//   { name: 'masud', age: 23 },
//   { name: 'sazid', age: 45 }
// ]
// when we use array of object?
// when we need many information in one object then we use array of object

// ✅ better approach don't need many times  variable call
const people = [
    
{
    name :"munna",
    age:12
},
{
    name :"sollu",
    age:156
},
{
    name :"masud",
    age:23
},
{
    name :"sazid",
    age:45,
    friends:['munna',"rofik","masud"]
}
];

console.log(people[0].name) // munna
console.log(people[1].age)  // 156
// [
//   { name: 'munna', age: 12 },
//   { name: 'sollu', age: 156 },
//   { name: 'masud', age: 23 },
//   { name: 'sazid', age: 45 }
// ]
for (let p of people){
    console.log(`${p.name} (${p.age})`)
}
// output
// munna (12)
// sollu (156)
// masud (23)
// sazid (45)