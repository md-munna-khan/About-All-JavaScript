# ⭕⭕⭕ LOOP⭕⭕⭕
## 🔵3:27:44- LOOP
## 🔵3:31:27- For LOOP
```js
// we use for loop when we know start point and end point

// for(let i= 0; i <10;i++){
//     console.log("hello")
// }


let sum =0
for(let i=1; i <=15; i++ ){
    if(i % 3===0){
  sum = sum + i
    }
 
}
console.log(sum)
```


## 🔵3:38:01- While LOOP
```js
// while loop and for loop is same to same but different is we know start and ending point for loop but 
// while loop we know start but but don't know ending point for example you create a terminal base website user when failed again he can try to logged but you don't know when he successfully logged in 


// while(true){
// console.log("hwllo world")
// }


// ** variable call out of loop


// let i =1;
// while(i<100){
//     console.log(i)
//      i++
// }

let sum = 0
let i =1
while(i<=5){
sum +=i;
i++
}
console.log(sum)
```
## 🔵3:42:22 - Do While LOOP
```js
const isLoop = false;
while(isLoop){
    console.log("this Loop will never run")
}

// do while loop run minimum 1 time if loop true or false doesn't matter

do{
  console.log("it will run at least once")  
}while(isLoop)
```
## 🔵3:45:03 - For In LOOP
```js
const Fname = "Stack Learner";

// for(let i in Fname){
// console.log(i)
// }
// output // 0 1 2 3 4 5 6 7 8 9 10 11 12

for(let i in Fname){ 
console.log(Fname[i])
}

// for in loop as i always get the  index number 
// out put
// S
// t
// a
// c
// k

// L
// e
// a
// r
// n
```
## 🔵3:48:52 - For Of LOOP
```js
// for in loop return always index number
// for of loop return actual value
const cname = "stack learner"

for(let v of cname){
    console.log(v)
}

// output 
// s
// t
// a
// c
// k

// l
// e
// a
// r
// n
// e
// r
```

