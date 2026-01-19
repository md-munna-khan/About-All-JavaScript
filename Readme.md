# ⭕⭕⭕ARRAY⭕⭕⭕


## 🔵3:51:15- Why do we need array?
- array is just a collection
- its collection of data 
- for example we have lot off eggs and you must need a tray for keep it 
![alt text](image-25.png)
- now you know array is simple

## 🔵4:01:34- How does Array work in JS?
- step-1 create an instance example let arr=[]
- step -2 add elements example  arr[0]=34,arr[1]=67 etc
- access data when Necessary
- ----- javascript array is dynamic
- we can store anything in js

## 🔵4:07:57- What we can store in JS array?
- best practice is one kind of data store is better solution
![alt text](image-26.png)
## 🔵4:09:32- What is multidimensional array?
- basically array of array
![alt text](image-27.png)
## 🔵4:15:22- Array LIteral
```js
// array Literal
// const
//  arr = []
// arr[0]= 45;
// arr[1]=34;
// arr[2]=56
// arr[1]=80
// arr[99]=200 //[ 45, 80, 56, <96 empty items>, 200 ]
// this is basic way declare arr but js is dynamic data show thats why we don't need to say call to index number
// console.log(arr.length)
// console.log(arr)
// ✅length = lastindex + 1
// ✅lastindex = length -1

const names =[
    "hm nayem",
    "rofik",
    "jabbar",
    "korim",
    "rohim",
    "raju"
]
// names[5] = "masud"  if we use update for this type it si replace 5 number index number and we lost 5 number store of data ❌
// names[names.length]='sollu' this is right way and dynamically change ✅
console.log(names.length)
console.log(names)
```
## 🔵4:25:50- Array Constructor vs Factory
```js
// constructor pattern
const a1 = new Array() // []
// new Array mean []
console.log(a1,a1.length) // [] 0
// some times need declare before length thats time we call constructor and its not work in literal array

const a2= new Array(5)
console.log(a2,a2.length)// [ <5 empty items> ] 5 // before length call

const a3 = new Array(1,2,3,4,5);
console.log(a3,a3.length)



// factory pattern
// in the factory pattern we dont need call to new keywords
const b1 =  Array() // []
// new Array mean []
console.log(b1,b1.length) // [] 0
// some times need declare before length thats time we call constructor and its not work in literal array

const b2=  Array(5)
console.log(b2,b2.length)// [ <5 empty items> ] 5 // before length call

const b3 =  Array(1,2,3,4,5);
console.log(b3,b3.length)

// testing
console.log(a1.__proto__.constructor)
console.log(b1.__proto__.constructor)
// output
// [Function: Array]
// [Function: Array]
```
## 🔵4:33:14- Traverse Array elements

```js
// loops can execute blocks of time
const arr = [14,2,33,434,43,54,90];
const n = arr[3]
const m = arr[2]
const x=1,
y=0

// console.log(m,n,arr[x],arr[y])
// output 3 4 22 11
// console.log(arr.length)

//============================  simple traverse
// easy this is repatative work we can use for in loop
// for(let i =0;i < arr.length;i++){
//     console.log(arr[i])
// }
// arr[0]
// arr[1]
// arr[2]
// arr[3]

// ========================== array sum and avg ===================================
/**
 *  sum = 0
 * sum = 0(updated sum value) + 1(next array element value) =1
 * sum = 1 + 2=3
 * sum = 3 + 3=6
 * sum = 6 + 4=10
 * sum = 10 + 5=15
 * 
 */
let sum = 0
for(let i =0;i<arr.length;i++){
     sum+= arr[i]
}
// console.log(sum)
// console.log(sum / arr.length)
// =============== find large number ======================

// const arr = [14,2,33,434,43,54,90];

let largestNumber = arr[0]
for(let i = 1;i<arr.length;i++){
    if(largestNumber <arr[i]){
        largestNumber =arr[i]
    }
}


// console.log(largestNumber)
// | Step | i | arr[i] | largestNumber (before) | Condition (`largest < arr[i]`) | largestNumber (after) |
// | ---- | - | ------ | ---------------------- | ------------------------------ | --------------------- |
// | Init | – | 14     | –                      | –                              | **14**                |
// | 1    | 1 | 2      | 14                     | 14 < 2 ❌                       | 14                    |
// | 2    | 2 | 33     | 14                     | 14 < 33 ✅                      | **33**                |
// | 3    | 3 | 434    | 33                     | 33 < 434 ✅                     | **434**               |
// | 4    | 4 | 43     | 434                    | 434 < 43 ❌                     | 434                   |
// | 5    | 5 | 54     | 434                    | 434 < 54 ❌                     | 434                   |
// | 6    | 6 | 90     | 434                    | 434 < 90 ❌                     | 434                   |



let smallestNumber = arr[0]
for(let i = 1;i<arr.length;i++){
    if(smallestNumber >arr[i]){
        smallestNumber=arr[i]
    }
}
// console.log(smallestNumber )

// | Step | i | arr[i] | smallestNumber (before) | Condition (`smallest > arr[i]`) | smallestNumber (after) |
// | ---- | - | ------ | ----------------------- | ------------------------------- | ---------------------- |
// | Init | – | 14     | –                       | –                               | **14**                 |
// | 1    | 1 | 2      | 14                      | 14 > 2 ✅                        | **2**                  |
// | 2    | 2 | 33     | 2                       | 2 > 33 ❌                        | 2                      |
// | 3    | 3 | 434    | 2                       | 2 > 434 ❌                       | 2                      |
// | 4    | 4 | 43     | 2                       | 2 > 43 ❌                        | 2                      |
// | 5    | 5 | 54     | 2                       | 2 > 54 ❌                        | 2                      |
// | 6    | 6 | 90     | 2                       | 2 > 90 ❌                        | 2                      |

const cars = ["A","B","C","D"];

for (let i = 0;i<cars.length;i++){
    console.log(i)
}
```

## 🔵4:51:05-  Update Array elements
```js
// array fill manual way

// update array manual system
const arr1= new Array(10)
// console.log(arr1) // [ <10 empty items> ]
for(let i =0;i<arr1.length;i++){
    arr1[i]= false
}

// console.log(arr1)
//[
//   false, false, false,
//   false, false, false,
//   false, false, false,
//   false
// ]

// array fill up by fill method
const arr2= new Array(10)
arr2.fill(0)
// console.log(arr2)
//[
//   0, 0, 0, 0, 0,
//   0, 0, 0, 0, 0
// ]

const names = ["munna","rofik","jabbar"];
names[0]=false
// console.log(names) // [ false, 'rofik', 'jabbar' ]

names[0]="hasan";
names[1]="sazid";
names[2]="masud";
// console.log(names) // [ 'hasan', 'sazid', 'masud' ]

const response = new Array(9)
response.fill(0)

for(let i=0;i<response.length;i++){
const rand = Math.floor(Math.random() * 10+1);

console.log(rand)
response[i] = rand > 5?"x":"0";
}
console.log(response)
// Math.random() always returns a number lower than 1.
// Math.floor() is a built-in JavaScript function that rounds a number down to the nearest integer.
// Math.floor(4.9)   // 4
// Math.floor(4.1)   // 4
// Math.floor(4.0)   // 4



// array is mutable
function update (arr){
    for(let i=0;i<arr.length;i++){
        arr[i] = `${i+1},${arr[i]}`
    }
    return arr;
}

update(names);
console.log(names)
// [ '1,hasan', '2,sazid', '3,masud' ]
```

## 🔵5:03:34-  Array of everything
```js
// array of anything
const arr = [12,"munna",true,getTen,{ten:10},[12,34]];


function getTen(){
return 10
}
// console.log(arr)
// - in the js we can store anything but this is not good practice try same type data as well as store 
// [ 12, 'munna', true, [Function: getTen], { ten: 10 }, [ 12, 34 ] ]

//===============================  array of object 
// all type data is same name and url 
// we can store all same type in array = thats why this name is array of objects
const favChannels =[
    {name:"stack learner",url:"https://youtu.be/Ky1_8cdIQBw?si=uqlDG5sWiQTSkdVh"},
    {name:"programming her ",url:"https://youtu.be/Ky1_8cdIQBw?si=uqlDG5sWiQTSkdVh"},
    {name:"learn with sumit",url:"https://youtu.be/Ky1_8cdIQBw?si=uqlDG5sWiQTSkdVh"}
]

// ============================ array of  functions

const sum = (a,b)=> a+b;
const sub = (a,b)=> a-b;
const times = (a,b)=> a*b;
const div = (a,b)=> a/b;
const mod = (a,b)=> a%b;

const funch =[sum,sub,times,div,mod]
const a = 10, b=20;
for(let i=0;i<funch.length;i++){
    const result = funch[i](a,b);
    // console.log(`[${funch[i].name}] Result = ${result} `)
}

// array of Arrays Multi Dimensional Array============================
const pointTable =[
[0,4],
[2,6],
[2,7],
[4,7]
];
// one dimensional traverse  (seeing one by one)
for(let i =0;i<pointTable.length;i++){
    // console.log(`point ${i} - x= ${pointTable[i][0]} y=${pointTable[i][1]}` )
}

// two dimensional traverse
const numbers =[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

for(let i =0;i<numbers.length;i++){
    // console.log(i) //0 1 2
    for(let j=0;j<numbers[i].length;j++){
    // console.log(numbers[i][j])
}
}


// matrix Example
const matrixA =[
    [1,2],
    [1,0],
    [1,2]
];
const matrixB =[
    [1,9],
    [1,0],
    [5,2]
];

const matrixSum = (matrixA,matrixB)=>{
    const result =[]
    for(let i=0;i<matrixA.length;i++){
        const row = []
        for(let j=0;j<matrixA[i].length;j++){
            row.push(matrixA[i][j]+matrixB[i][j])
        }
        result.push(row)
    }
    return result
}

const matrixC=matrixSum(matrixA,matrixB)
console.log(matrixC)
// [ [ 2, 11 ], [ 2, 0 ], [ 6, 4 ] ]
```


