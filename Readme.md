# ⭕⭕⭕OBJECT⭕⭕⭕
## 🔵5:25:13-  What is Object?
-  object is a key value pair to store data
- for example if you define yourself  you tell your name ,age ,study,father  name ,mother name etc;
so if you use variable or object this is not perfect solution because if define by variable need many variable and if you define by variable when you find data you need memorize data index this is problem so that's why we use object

```js
// object is a key value pair to store data
❌ const fname="munna";
❌ const lname="mia";
❌ const email = "munna@gmail.com";

❌ const person = ["HM","munna",12]
```
## 🔵5:30:37-  How to define Object?
```js
// how to define object?
// const o ={} // object

// object shape 1
const person1={}
person1.name="munna";
person1.age= 23;
person1.emai= "munna@gamil.com";
console.log(person1) 
// { name: 'munna', age: 23, emai: 'munna@gamil.com' }

// object shape 2
const person2={
    name :"munna",
    age: 34,
    address:"mirpur"
}
console.log(person2)
console.log(person2.age)
// { name: 'munna', age: 34, address: 'mirpur' }
```

## 🔵5:35:36-  Add and Remove element
```js
// object shape 2
const person2={
    name :"munna",
    age: 34,
    address:"mirpur"
}
// ✅add id element in the object
person2.id ='213'
// { name: 'munna', age: 34, address: 'mirpur', id: '213' }

//❌ delete element  age is deleted
delete person2.age;
// { name: 'munna', address: 'mirpur', id: '213' }

console.log(person2)


 //✅ dot notation add and delete property
//  person2.id ='213'

//✅ array notation
const key= "name"
console.log(person2 ["address"]) // mirpur
console.log(person2 [key]) //munna
```

## 🔵5:40:23-  Array of objects
```js
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
   ✅ friends:['munna',"rofik","masud"]
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
```