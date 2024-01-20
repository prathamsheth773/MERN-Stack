function grinder(items){
    console.log('grinding....',items)
}
grinder('tomatoes');
grinder('potatoes');

function add(num1 , num2){
    console.log(num1+num2)
}
add(3,2);
add(12.44)

// calculate the tds => gov => tds is 10%
function calculateTds(salary){
    let tds = salary*0.1;
    // console.log(tds)
    return tds 
}
let tds = calculateTds(50000)
// calculateTds(35000)
console.log(tds)


// arrow functions
arrowFunctionName =() =>{
    //code
}
cube = (number) => {
    console.log("Calculating cube of",number)
    return(number*number*number)
}
sqr = (number) => {
    console.log("Calculating sqr of",number)
    return(number*number)
}
console.log(cube(3))
console.log(cube(2))
console.log(sqr(3));



// loop -> executing the same task again and again

for(let i= 1; i<=7; i++){
    console.log(i)
}

let shoppingList = ['milk','coffee','butter','notebook','pen'];
for(let i = 0; i<=shoppingList.length;i++){
    console.log(shoppingList[i])
}