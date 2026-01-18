// array Literal
// const
//  arr = []
// arr[0]= 45;
// arr[1]=34;
// arr[2]=56
// arr[1]=80
// arr[99]=200 //[ 45, 80, 56, <96 empty items>, 200 ]
// this is basic way declare arr but js is dynamic data show thats why we don't need to say call to index number
// console.log(arr.length)
// console.log(arr)
// ✅length = lastindex + 1
// ✅lastindex = length -1

const names =[
    "hm nayem",
    "rofik",
    "jabbar",
    "korim",
    "rohim",
    "raju"
]
// names[5] = "masud"  if we use update for this type it si replace 5 number index number and we lost 5 number store of data ❌
// names[names.length]='sollu' this is right way and dynamically change ✅
console.log(names.length)
console.log(names)