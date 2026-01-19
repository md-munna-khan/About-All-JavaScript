// how to define object?
// const o ={} // object

// object shape 1
const person1={}
person1.name="munna";
person1.age= 23;
person1.emai= "munna@gamil.com";
// console.log(person1) 
// { name: 'munna', age: 23, emai: 'munna@gamil.com' }

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


// { name: 'munna', age: 34, address: 'mirpur' }

 //✅ dot notation add and delete property
//  person2.id ='213'

//✅ array notation
const key= "name"
console.log(person2 ["address"]) // mirpur
console.log(person2 [key]) //munna