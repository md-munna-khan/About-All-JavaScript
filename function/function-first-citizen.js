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