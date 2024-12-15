//Create a function to filter out all odd numbers from an array.
let arr = [10, 20, 30, 40, 50,3]; 

function bhav(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            console.log(`The number is even: ${arr[i]}`);
        } else {
            console.log(`The number is odd: ${arr[i]}`);
        }
    }
}

bhav(arr);
