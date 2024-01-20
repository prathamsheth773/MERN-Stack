// map filters and reduce 
let number = [1,42,55,2,57,22,78,99,124,32]
// map 

// for(i=0; i<= number.length;i++)
// {
//     console.log(number[i])
// }
// // here function used without giving it name it's call as anomyans
// let sqr = number.map((x)=>{   
//    return x*x;  
// })
// console.log(sqr);
// let cube = number.map(function aCube(x) {
//     return x * x * x ;
// })
// console.log(cube);

// filters

// let numberGreaterThan5 = number.filter((x)=>{
//     if(x>5){
//         return x;
//     }
// })
// console.log(numberGreaterThan5);

// chaining process
// let cube = number.map(function aCube(x) {
//     return x * x * x ;
// })
// let cubeFilters = number.map(function aCube(x) {
//     return x * x * x ;
// }).filter((x)=>{
//     return x>100
// })
// console.log(cube);
// console.log(cubeFilters);


// reduces

let total = number.reduce((previous, current, index)=>{
    let sum = current + previous;
    return sum;
},0)
console.log(total)
let greatest = number.reduce((previous,current)=>{
    let highest = previous
    if (highest <= current ) {
        highest = current;
    }
    console.log(highest)
    return highest
},0)

console.log(greatest);