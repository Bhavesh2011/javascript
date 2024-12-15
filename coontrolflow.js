// tbis is the 1st method
// if (condition) {
    
// } else {
    
// }
// //2nd method - not much readable
// if(consition) console.log("Test"),console.log("Thes2");

// if (condition) {
    
// }
// elseif(condition) 
// {

// }  else  {

// }
const month = 3;
switch (month) {
    case 1:
         console.log("Jan");
         break;
    case 2:
         console.log("feb");
         break;
    case 3:
         console.log("march");
         break;
    case 4:
         console.log("april");
         break;
    case 5:
         console.log("may");
         break;

    default:
        console.log("WWWWWWW");
        
        break;
}
//if u dont write a break keyword it will print all the cases except default
// falsy value
//false
//0
// -0
// BigInt 0n
// ""
// null
// undefined
// NaN
//what it means
const name = "Bhavesh" // if it empty string then it does not enter in if
if(name){
    console.log("2*2");
    
}
//truthy
//"0"
// 'false'
// "false"
// " "
// []
// {}
// function () {}

//Nullish coalesong operator (??)

let val1;
val1 = 5??10
val2 = null??10
val3 = undefined??10
val4 = null??undefined
val5 = undefined??null
console.log(val1);//5

console.log(val2); //10
console.log(val3);//10
console.log(val4);//undefined
console.log(val5); //null

