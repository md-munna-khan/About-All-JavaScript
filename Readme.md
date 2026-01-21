# ⭕⭕⭕FUNCTION⭕⭕⭕
## 🔵5:46:39- What is function?
```js
// what is function 
const arr1 =[1,2,34,56,65,76,54]
const arr2 =[13,2,323,46,65,76,54]

// let max= arr1[0]
// for(let v of arr1){
//     if(v > max){
//         max = v
//     }
// }
// console.log(max)
// rapatative work
// let max1= arr2[0]
// for(let v of arr2){
//     if(v > max1){
//         max1 = v
//     }
// }
// console.log(max1)

// A function is a block of code that does a specific task.
// You write the solution once and call it many times whenever needed.

function findMax (arr){
 let max= arr[0]
for(let v of arr){
    if(v > max){
        max = v
    }
}
return max
}
console.log(findMax(arr1))
console.log(findMax(arr2))
```

## 🔵5:53:19- How to define function?
```js
// function define 
//() this parent theses is a parameter and we can pass the value
function myFunction(){
    console.log("My First Function")
    const a = 20;
    const b= 30
    console.log("sum "+ (a+ b))
}

// we can call many times
myFunction()// function call 
myFunction()// function call 
myFunction()// function call 
myFunction()// function call 
```
## 🔵5:57:55- Function arguments

```js
function sum (a,b ✅ argument ){
const result = a+b;
console.log(result)
}

sum(20,40 ✅ argument) // actual value  argument
sum(33,49)
sum(323,32)
sum(33,22)
```
## 🔵6:02:13- Return Statement
```js
// return is used inside a function to send a value back to where the function was called and stop the function execution.
function sum (a,b ){
const result = a+b;
return result
}
// return data we can a store in a variable
const r1= sum(20,40) 

const r2=sum(33,49)
const r3=sum(323,32)
const r4=sum(33,22)
console.log(r1,r2,r3,r4)
```
## 🔵6:08:14- Arrow function
```js
// ✅ this function name is function expression
// function sum (a,b){
//     a+b
//  return a+b
// }
// console.log(sum(5,7))

// const sum = function (a, b) {
//   return a + b
// }

// console.log(sum(4, 6))

// arrow function 

// const sum = (a,b)=>{
//     console.log( a+b)
// return a+b

// }
// sum(4,65)

// we can call one line when our code is short
const sum1 = (a,b)=>  a+b;
console.log(sum1(6,8))
const max = (a,b)=> Math.max(a,b)
console.log(max(5,6))
```
## 🔵6:13:00- Function is first class citizen 
```js
// function is first of citizen

function sayHello(name){
    console.log("hello", name)
}

const sayHi = sayHello

// console.log(sayHi)
// [Function: sayHello]

sayHi("munna")
// hello munna
// in there sayHello value receive sayHi and we call sayHi variable and pass argument 
// in there we pass function in another function
```
## 🔵6:16:42- Inner Function
```js
// inner function
// in one function call another function
function outer() {
  function inner() {
    console.log("I am inner function")
  }

  inner()
}

outer()


function displayTable(n){
    const isOdd=(n)=> n%2 !==0
    const isEven=(n)=> n%2 ===0
for (let i=0;i <n;i++){
    if(isOdd){
        console.log('table Row [#fff]', i+1)
    }else if(isEven){
 console.log('table Row [#000]', i+1)
    }
}}
displayTable(10)
// table Row [#fff] 1
// table Row [#fff] 2
// table Row [#fff] 3
// table Row [#fff] 4
// table Row [#fff] 5
// table Row [#fff] 6
// table Row [#fff] 7
// table Row [#fff] 8
// table Row [#fff] 9
// table Row [#fff] 10
```

## 🔵6:21:35- Callback function
```js
// const arr = [1,2,4]

// let sum = 0
// arr.forEach(element => {
//     // console.log( "value",element)
//     sum +=element
// });
// console.log(sum)

function toUpper(str,callback){
const upper = str.toUpperCase();
callback(upper)
}

toUpper ('stack learner',(abc)=>{
    console.log(abc)
})
// A callback function is a function you pass to another function, so that function can run it later when it decides.
```
## 🔵6:28:05- Return function
```js
// higher order function

function returnIsEven(){
    const isEven = (n)=> n%2 === 0;
    return isEven
}

const isEven = returnIsEven()
console.log(isEven(5)) // output false

// shortcut way
console.log(returnIsEven()(10)) // output true

// call a function to another function
```
## 🔵6:31:27- Function scopes
```js
let globalVariable ="Global Value"; // global variable can access any where in code
function outerFunction(){
let scopedVariable = "scoped value";
function innerFunction(){
    let innerVariable = "inner value"
    console.log(scopedVariable)
}
// to parent variable can access child
innerFunction()
// ❌ console.log(innerFunction) // every variable own are
}

outerFunction()
```
## 🔵6:35:08- Understand closure

```js
// closure

function multiplier (t){
    return function(n){
        return n*t
    }
}

const multiplyBy5 = multiplier(5) // closure

console.log(multiplyBy5(20))
console.log(multiplyBy5(40))
console.log(multiplyBy5(2))

// What is multiplyBy5 really?

// multiplyBy5 is not a number, it is a function:

// multiplyBy5 = function(n) {
//     return n * 5
// }


// It stores the inner function itself, with t = 5 remembered.

// So you can now call it multiple times with different n values.
```