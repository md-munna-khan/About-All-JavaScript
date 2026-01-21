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
// rapeatative work
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