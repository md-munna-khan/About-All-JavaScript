//1.Task: Array Filtering and Mapping

// -Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

const people = [
    {name:"munna",age:20,gender:"male"}, 
    {name:"rohima",age:30,gender:"female"}, 
    {name:"korim",age:10,gender:"male"}, 
    {name:"mim",age:110,gender:"female"}, 
]

const filterData = people
.filter(person=>person.gender ==="male" )
.map(person =>person.name)
console.log(filterData)

// 2.Task: Object Manipulation

// -Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.


const books = [
    {title:"book1",author:"author1",year:2001},
    {title:"book2",author:"author2",year:2002},
    {title:"book3",author:"author3",year:2003},
    {title:"book4",author:"author4",year:2004},
]

const bookData = books     
.map(book=>book.title)
console.log(bookData)

// 3.Task: Function Composition

// -Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.

const square = num => num * num;

const double = num => num * 2;

const add5 = num => num + 5;


const compose = (num) => add5(double(square(num)));
console.log(compose(2))


// 4.Task: Sorting Objects

// -Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.

const cars = [
    {make:"toyota",model:"corolla",year:2020},
    {make:"honda",model:"civic",year:2018},
    {make:"ford",model:"mustang",year:2021},
    {make:"chevrolet",model:"camaro",year:2019},
]

 cars.sort((a,b)=>a.year- b.year)
console.log(cars)


// 5.Task: Find and Modify

// -Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.

const persons = [
    {name:"rofik",age:25},
    {name:"sofik",age:30},
    {name:"mukter",age:35},
]
const updateAgeByName = (arr, name, newAge) => {
    const person = arr.find(person => person.name === name);
    if (person) {
        person.age = newAge;
    }
    return arr;
};

const updatedPersons = updateAgeByName(persons, "sofik", 32);
console.log(updatedPersons)

// 6.Task: Array Reduction

// -Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.
const numbers = [1,2,3,4,5,6,7,8,9,10];
const someOfNumbers = numbers
.filter(num=> num % 2 ===0)
.reduce((acc,cur)=> acc + cur,0)
console.log(someOfNumbers)

// 7. Task: Leap Year Checker

// -Write a function that determines whether a given year is a leap year.
// Example: Happy New Year
const isLeapYear = (year) => {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }   
};
console.log(isLeapYear(2020)); 
console.log(isLeapYear(1900)); 
console.log(isLeapYear(2000)); 

// 8. Task: Unique Values

// -Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.

const nums = [1,2,2,3,4,4,5,6,6,7,8,8,9,10];
const uniqueNums = [...new Set(nums)];
console.log(uniqueNums)
// 09.Task: Advanced Sorting

// -Create an array of objects representing students with 'name' and 'grades' properties. Write a function to sort the students by average grade in descending order.
const students = [
    {name:"jabber",grades:[90,80,85]},
    {name:"hadi",grades:[70,75,80]},
    {name:"omor",grades:[95,85,90]},
]
students.sort((a,b)=>{
    const avgA = a.grades.reduce((acc,cur)=> acc + cur,0) / a.grades.length;
    const avgB = b.grades.reduce((acc,cur)=> acc + cur,0) / b.grades.length;
    return avgB - avgA;
})
console.log(students)

// 10. Task: Functional Programming - Reduce

// -Write a function that uses the reduce function to calculate the total value of an array of objects with a 'quantity' and 'price' property.interview


const items = [
    {quantity:2,price:10},
    {quantity:3,price:15},  
    {quantity:1,price:20},
]
const totalValue = items
.reduce((acc,cur)=> acc + (cur.quantity * cur.price),0)
console.log(totalValue)