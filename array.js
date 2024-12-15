 // javascript array are resizeable and can contain different datatypes in it
 //example 
 let myarr = [10,20,30,40,50]
 console.log(myarr[0]) //10

 //Another 
 let myarr2 = new Array(10,20,30,40,50);

 //push 
 myarr2.push(90) //adding a element in it at the last
 console.log(myarr2);

 //pop
 myarr2.pop()  //Removes the last element 
 console.log(myarr2);

 //unshift
 myarr2.unshift(1000000000000000000000) // Added a element at the start 
 console.log(myarr2);

 //shift 
 myarr2.shift() //Rmoves the 1st element from the starting
 console.log(myarr2);

 //includes 
 console.log(myarr2.includes(9)); //chech whather it is there or not

//indexof
console.log(myarr2.indexOf(10)) // Gives the index

 //join
 const myarr3 = myarr2.join()
 console.log(myarr3); // convert into string like - 10,20,30,40,50

let n1 = new Array(1000,20000,30000,4000,50000)
console.log(n1)
n1.slice(1,3)
console.log(n1);
n1.splice(1,3)
console.log(n1);
// slice nntr array tssach asto ani jr tu tkla 1-3 tr valu 2 prynt yetat 
// for splice it is like that 1st the original array cut till 3 index and then the og array is from the 4 the index and the remaining is another array

// let mynew6 = new Array(10,20,30,40,50,60)
// mynew5.push(mynew6)


// Array can add a array as a element Example -
let arr = new Array("bh","ch","th");
let arr2 = new Array("ng","mh","kk")
arr2.push(arr)
console.log(arr2); //[ 'ng', 'mh', 'kk', [ 'bh', 'ch', 'th' ] ] these is the output where it accept all element as a sinle element

// for solvin these problem u can do concat
//example
const all = arr.concat(arr2);
console.log(all); //[ 'bh', 'ch', 'th', 'ng', 'mh', 'kk' ] these is our output

//Another mothod is spread having syntax
const arr3 = [...arr2,...arr]; // Keep focusing on dots dont type 2 or 4 type only 3 and brackets are square
console.log(arr3); //[ 'bh', 'ch', 'th', 'ng', 'mh', 'kk' ] these is our output

// there is method who takes the sepration of array 
let myarr4 = [10,20[30,40],50,60[400,500[100000,300000]]]
let myarr5 = myarr4.flat(Infinity); // seprate all element and give the output infinity means mdhe kiti vela jayc ahe like that

console.log(myarr5);

// for converting into array 
console.log(Array.from("Bhavesh")); 
//[
//     'B', 'h', 'a',
//     'v', 'e', 's',
//     'h'
//   ]


//Another 
let s1 = 100;
let s2 = 200;
let s3 = 300;

console.log(Array.of([s1,s2,s3])) //[ [ 100, 200, 300 ] ]


 
