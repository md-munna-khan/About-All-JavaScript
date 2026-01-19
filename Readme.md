
 # ⭕⭕⭕ OPERATOR ⭕⭕⭕ 

### 🔵1:32:57- OPERATOR operator mean driver  or guider
![alt text](image-11.png)

### 🔵1:36:57-Type of operators
![alt text](image-12.png)

### 🔵2:01:54- Arithmetic and Assignment Operators
`1`  Arithmetic Operator
  - 1 add (+)
  - 2 subtraction (-)
  - 3 Multiplication (*)
  - 4 Division (/)
  - Modulus (%)
  ![alt text](image-13.png)

  `2` Assignment Operator
![alt text](image-14.png)
![alt text](image-15.png)
```js
 console.log("arithmatic operator")
 let a =20
 let b =30

 console.log(a+b)
 console.log(a-b)
 console.log(a*b)
 console.log(a/b)
 console.log(a%b)

  console.log("assignment operator operator")
  let number =20
  console.log(number)
  number +=5
  console.log(number)
  number -=4
   console.log(number)
     number *=4
 console.log(number)
  number /=4
   console.log(number)
     number %=2
     console.log(number)
 ```

 `3` Relational Operator
 > greater than its mean big
 < less than its mean small 
![alt text](image-16.png)
```js
// relational operator
let a = 10 ; let b= 10 ; let c = 50

console.log( a>c )
console.log( b < a)
console.log( b >=b)
console.log( a !=b)
```

 `4` logical Operator
![ ](image-17.png)
```js
// logical operation
let m = 30 ; let n = 400

let andOperation = (m > 100) && (n <500);
console.log(!andOperation)

let orOperation =  (m > 300)|| (n > 300)
console.log( orOperation)

```
### 🔵2:26:02 - Operator Importance  Precedence
![alt text](image-18.png)

![alt text](image-19.png)
- assignment operator
![alt text](image-20.png)

## OJ (online judge) CP (competitive Programming) What is the Different

![alt text](image-21.png)

![alt text](image-22.png)

## ⭕⭕⭕CONDITION⭕⭕⭕
## Control Your program
## 🔵2:45:20- CONDITION
- condition is an expression that either can be true or false
if: some expression then -> do some work
 
- Lets Explore Conditions

![alt text](image-23.png)

## 🔵3:01:39 - ELSE IF(understanding)
![alt text](image-24.png)

```js

// one condition use only if 
// if our logic less than 2 then use if else
// if our logic huge then use else if

const myAge = 20
const myBrotherAge = 20

if(myAge > myBrotherAge){
    console.log("i am elder")
}else if(myBrotherAge > myAge)  {
    console.log("my brother is elder")
}else{
    console.log("we are both same")
}

```
## 🔵3:17:31- SWITCH statement 

```js
// switch statement when you need exact output and dont need  comparison to other that time use switch case

const day = 20;

switch (day) {
  case 0:
    console.log("friday");
    break;
  case 1:
    console.log("saturday");
    break;
  case 2:
    console.log("sunday");
    break;
  case 3:
    console.log("monday");
    break;
  case 4:
    console.log("tuesday");
    break;
  case 5:
    console.log("wednesday");
    break;
  case 6:
    console.log("thursday");
    break;
  default:
    throw new Error("invalid input");
}
```

## 🔵3:23:40- Condition Operator
- statement does not return any thing like (if else,switch case etc) but expression return something
```js
const theme = "light";
// if condition right then output show before neither after colone output show
let bgColor =  theme ==="light"? "#dddd": "llll"

// let bgColor = ""

// if(theme === "light"){
//   bgColor = "#dddd"
// } else{
//     bgColor = "#llll"
// }
console.log(bgColor)
```
