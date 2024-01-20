let users =[
    {name:'Pratham',email:'prathamsheth077@gmail.com'},
    {name:'Sujal',email:'sujal@gmail.com'},
    {name:'Yash',email:'yashjadav@gmail.com'},
    {name:'Poojan',email:'poojan@gmail.com'},
    {name:'Kinmay',email:'kinmay@gmail.com'},
    {name:'Vraj',email:'vraj@gmail.com'},
    {name:'Raj',email:'raj@gmail.com'},
    {name:'karan',email:'karan@gmail.com'},
    {name:'Prince',email:'prince@gmail.com'},
    {name:'Naman',email:'naman@gmail.com'},  
];
let totalUser = users.length;
let winner = Math.floor(Math.random()*totalUser)
console.log(users[winner].name);

//conditions
// let age = 28;
// if(age>18){
//     console.log("You are eligible to vote");
// }
// else{
//     console.log("You are not eligible to vote")
// }

let weather = "sunny";
if(weather === 'ranny'){
    console.log('Take an umbrellas');
}
else if(weather === 'sunny'){
    console.log('Wear sun glasses');
}
else if(weather === 'cold'){
    console.log('Take a jacket')
}
else{
    console.log('Enjoy your day')
}

// different between == and ===

let studentAge = '18'

if(studentAge==18){
    console.log("congratulation you can vote");
}
// throw error because studentAge varable datatype is not same
// if(studentAge===18){
//     console.log("congratulation you can vote");
// }


//ternary operator
//condition ? {true} : {false}

let age = 14;
let role = 0;
let userStatus = role == 0 ? 'student': role == 1 ?'teacher':role == 2?'admin':'invalid'
console.log(userStatus)

// if else status
// and and or operator (&& and  or || )
age = 29;
if(age>18 && age<24){
    console.log("You are elegable ")
}

let friend = 'yash'
if(friend == 'yash' || friend == 'sujal'){
    console.log("I will their in party");
}
else
{
    console.log("I will not be in party");
}

let password = 'pratham'
let userName = 'pratham077'
if(userName == "pratham077" && password == 'pratham'){
    console.log("Login Successfully");
}
else{
    console.log("Login Failed");
}