//variable -> var let and const

// database -> string,number, boolean, object

//array and object

var name ='Pratham'
var name ='Pratham sheth'
console.log(name)
let email ="prathamsheth077@gmail.com";
email = "prathamsheth773@gmail.com"
console.log(email);
// major difference in let and var 

// using var varable can redeclare

// but using let varable can't be redeclare




const number ='123456789';

console.log(number);

// const varable can't update value of varable

// number ='000000000';

// console.log(number);




// typeof keyword is used to know datatype of varable

// 1) number

// 2) boolean

// 3) string

// 4) undefined

// 5) null

// 6) object




// array and object




//array -> 

// array is used to store multiple value in single varable

// it is collection of data

// we use [] for create array

// array index start from 0

let hobbies = ['cricket','cooking','coding'];

console.log(hobbies);

console.log(hobbies[1]);

//push and pop

// push is used to add new value at last of array

// pop is used to remove last value from array

hobbies.push('reading');

console.log(hobbies);

hobbies.pop();

console.log(hobbies);

// splice -> array.slice(index, items to be removed, {items to be added[optional]})

hobbies.splice(0,1,'Painting');

console.table(hobbies);

hobbies[2]="danceing";







//object -> key value pair 




let user ={

    name:'Pratham',

    email:'prathamsheth077@gmail.com',

    hobbies:['cricket','cooking','coding'],

    age:20,

}

console.log(user.name);

console.log(user['email']);

//add property

user.country='India';

console.log(user);

delete user.age; // delete property

console.log(user);

console.log(user.hobbies[0])




let users=[

    {id:1,name:"John"},

    {id:2,name:"Alex"},

    {id:3,name:"Jane"},

    {id:4,name:"Pratham"},

];

let newUser = {id:5,name:"Poojan"};
users.push(newUser);
console.table(users);