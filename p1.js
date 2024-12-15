//Write a function that takes an array of numbers and returns a new array with all numbers doubled.

let arr = new Array(10,20,30,40,50,60);

function bhav(arr)
{
 for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]*2);
    
    
 }
}
bhav(arr)

// chatgpt ans 
// let arr = new Array(10, 20, 30, 40, 50, 60);

// function bhav(arr) {
//     let doubledArray = []; // Create a new array to store doubled values
//     for (let i = 0; i < arr.length; i++) {
//         doubledArray.push(arr[i] * 2); // Add the doubled value to the new array
//     }
//     return doubledArray; // Return the new array
// }

// console.log(bhav(arr)); // Output the new array
