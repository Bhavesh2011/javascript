// singleton
// When object created with the methods of literals then it is not created singleton
// object literals
//Example - 

const Juser = {
    //key , value 
    name:"hitesh",
    age:18,
    location:"Nashik",
    email:"Bg@gmail.com",
    "Fullname":"BhaveshGaikwad" // These is method while declaring the string 

}
//Accesing methods 
console.log(Juser.email);
console.log(Juser["email"]);
console.log(Juser.Fullname);

//boject with constructor - With the help of these singleton is created
Object.create


const mysym = Symbol("key1") // Here we created a Symbol
const Juser1 = {
    //key vale 
    name1:"hitesh",
    [mysym]:"mykey1", // for these use a mysym in object as [mysym]
    age1:18,
    location:"Nashik",
    email:"Bg@gmail.com",
    "Fullname":"BhaveshGaikwad" // These is method while declaring the string 

}
console.log(typeof Juser1.mysym); // so the output must be symbol but it gives String
console.log(Juser1[mysym]); // Also change here
// for changing the variable input
Juser1.email="Bhavesh@gmail.com"
// for freezing a variable means no change in value by
// Object.freeze(Juser1)

//Function
Juser1.bala = function() {
    console.log("hello bhavesh keep doing");
    
}
console.log(Juser1.bala());
//For print values form the user
Juser1.bala2 = function() {
    console.log(`hello bhavesh keep doing,${this.name1}`);
    
}
console.log(Juser1.bala2());

const tinderuser = new Object()  //singleton
const tinderuser2 = {} //non singleton

console.log(tinderuser); //{}

console.log(tinderuser2); //{}

const userinfo = {
   
    Fullname:{ //Nested object (Remember :)
        First:{ 
            name: "Bhavesh" 
        }
    }
}
// for accessing a name syntax is 
console.log(userinfo.Fullname.First.name);
// if you want to check if it is present or not in the object a instead of if and else you can use a ? in syntax 
//example 
console.log(userinfo.Fullname?.First.name);

//merging a 2 objects 
const obj1 = {
    1 : "a",
    2 : "b"

}
const obj2 = {
    3 : "a",
    4 : "b"

}
const obj3 = {obj1,obj2}
console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// for avoiding these 
const obj4 = Object.assign({},obj1,obj2)
console.log(obj4); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
const obj5 = {...obj1,...obj2}
console.log(obj5); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
//for getting keys of objects
console.log(Object.keys(Juser)); // [ 'name', 'age', 'location', 'email', 'Fullname' ] store in the format of array
console.log(Object.values(Juser)); //[ 'hitesh', 18, 'Nashik', 'Bg@gmail.com', 'BhaveshGaikwad' ]
//for getting both combines
console.log(Object.entries(Juser));
// [
//     [ 'name', 'hitesh' ],
//     [ 'age', 18 ],
//     [ 'location', 'Nashik' ],
//     [ 'email', 'Bg@gmail.com' ],
//     [ 'Fullname', 'BhaveshGaikwad' ]
//   ]
 
// if you want to print a member of object 
const course = {
    Name :"Bg",
    price : 0,
    instructor : "Bhavesh"
}
const {Instructor} = course
console.log(Instructor);
