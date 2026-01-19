// array of anything
const arr = [12,"munna",true,getTen,{ten:10},[12,34]];


function getTen(){
return 10
}
// console.log(arr)
// - in the js we can store anything but this is not good practice try same type data as well as store 
// [ 12, 'munna', true, [Function: getTen], { ten: 10 }, [ 12, 34 ] ]

//===============================  array of object 
// all type data is same name and url 
// we can store all same type in array = thats why this name is array of objects
const favChannels =[
    {name:"stack learner",url:"https://youtu.be/Ky1_8cdIQBw?si=uqlDG5sWiQTSkdVh"},
    {name:"programming her ",url:"https://youtu.be/Ky1_8cdIQBw?si=uqlDG5sWiQTSkdVh"},
    {name:"learn with sumit",url:"https://youtu.be/Ky1_8cdIQBw?si=uqlDG5sWiQTSkdVh"}
]

// ============================ array of  functions

const sum = (a,b)=> a+b;
const sub = (a,b)=> a-b;
const times = (a,b)=> a*b;
const div = (a,b)=> a/b;
const mod = (a,b)=> a%b;

const funch =[sum,sub,times,div,mod]
const a = 10, b=20;
for(let i=0;i<funch.length;i++){
    const result = funch[i](a,b);
    // console.log(`[${funch[i].name}] Result = ${result} `)
}

// array of Arrays Multi Dimensional Array============================
const pointTable =[
[0,4],
[2,6],
[2,7],
[4,7]
];
// one dimensional traverse  (seeing one by one)
for(let i =0;i<pointTable.length;i++){
    // console.log(`point ${i} - x= ${pointTable[i][0]} y=${pointTable[i][1]}` )
}

// two dimensional traverse
const numbers =[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

for(let i =0;i<numbers.length;i++){
    // console.log(i) //0 1 2
    for(let j=0;j<numbers[i].length;j++){
    // console.log(numbers[i][j])
}
}


// matrix Example
const matrixA =[
    [1,2],
    [1,0],
    [1,2]
];
const matrixB =[
    [1,9],
    [1,0],
    [5,2]
];

const matrixSum = (matrixA,matrixB)=>{
    const result =[]
    for(let i=0;i<matrixA.length;i++){
        const row = []
        for(let j=0;j<matrixA[i].length;j++){
            row.push(matrixA[i][j]+matrixB[i][j])
        }
        result.push(row)
    }
    return result
}

const matrixC=matrixSum(matrixA,matrixB)
console.log(matrixC)
// [ [ 2, 11 ], [ 2, 0 ], [ 6, 4 ] ]