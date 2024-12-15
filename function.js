function Myname(){
    console.log("b");
    console.log("h");
    console.log("a");
    console.log("v");
    console.log("e");
    console.log("s");
    console.log("h");
}

// Myname // these is refrence of a function
Myname() // these is execution

function Add(Num1,Num2)//these are the parameters 
 {
    console.log(Num1+Num2);
    
}
Add(3 , 4) // these are the arguments in the ()

// but some one give "4" then it is by rule print as a 34
// if u give "a" then it is a 3a

// if you store the Add in the one variable lets say res then it shows its value is undefined 
//lets by example

const res = Add(4,5)
console.log(res); //undefined
// if you want to it stores the value then write a return in the function

function Add2(Num1,Num2)
 {
   const result = Num1+Num2
    return result
}
Add2(3 , 4)
const result = Add2(3 , 4)
console.log(result);
// if you write si=omething after return it will be never executed

function user(Username) {
    return `${Username} is just logged in`
}
console.log(user()); //undefined is just logged in 
// if you want to avoid these satge that something is just we need in that place then 
function user1(Username = "sam") // That shows that if you donot pass any name it will consider as a sam and it will move on
 {
    return `${Username} is just logged in`
}
console.log(user1());  //sam is just logged in
// you can also pass parameters 
// let says a shop have a number of items want to add a all prices 
function CalculatePrice(...num1){ // these syntax of ... gives a all prices in one array these is not spread operator it is a rest operator having a same syntax but differemt use case
    return num1
}
console.log(CalculatePrice(200,400,500));

const user3 = {
    username : "Bhavesh",
    price : 1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
}

function Username2(anyobject){
    return console.log(`The name of username is ${anyobject.username} and its price is ${anyobject.price}`);
    
}
Username2(user3);
// Arrow function
// this keyword current contest ki baat krta hai 
const red = {
    name: "bhavesh",
    price: 900000,

    add() { 
        console.log(`${this.name}, welcome back`); // Added 'this' to refer to the object's 'name' property
    }
};
red.add()
// arrow function example
const addtwo = (num9,num10) =>
{
    return num9+num10;

}
console.log(addtwo(2,5));

// ANother Syntax
const addt = (num9,num10) => (num9+num10)

    console.log(addtwo(2,5));

    
// Immediately Invoked Function Expression(IIFE)
// due to global scope pollution we need IIFE
(function chai(){
    console.log("Bhavesh");
    
}()); 