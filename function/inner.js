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