//Write a function greet that takes a name as a parameter and prints a greeting message. If no name is provided, use "Guest" as the default.

function User(Username = "Guest") {
    console.log(`${Username} is just logged in`)
}
User()

//Create a function multiply that takes two arguments and returns their product.
//Handle the case where one or both arguments are not numbers by returning "Invalid input".

function mult(num1,num2)
{
    if(typeof num1 === "number" && typeof num2 === "number")
    {

        console.log(`The ans is : ${num1*num2}`);

    }

    else
    {
        console.log("Invalid input")
    }
}

mult(2, 5); // Output: 10
mult(3, "a"); // Output: Invalid input

//Write a function sumAll that accepts any number of arguments and returns their sum.

function sumAll(...num1)
{
    console.log(num1+num1);
}
sumAll(100,200,300,400,500,600)