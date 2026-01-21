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