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