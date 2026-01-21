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