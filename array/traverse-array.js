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
