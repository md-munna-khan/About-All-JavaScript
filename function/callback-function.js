// const arr = [1,2,4]

// let sum = 0
// arr.forEach(element => {
//     // console.log( "value",element)
//     sum +=element
// });
// console.log(sum)

function toUpper(str,callback){
const upper = str.toUpperCase();
callback(upper)
}

toUpper ('stack learner',(abc)=>{
    console.log(abc)
})
// A callback function is a function you pass to another function, so that function can run it later when it decides.