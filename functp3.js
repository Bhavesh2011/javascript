function sumAll(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0); // reduce add the all numbers in the array
}

// Example usage:
console.log(sumAll(1, 2, 3, 4)); // Output: 10
console.log(sumAll(5, 10, 15));  // Output: 30
