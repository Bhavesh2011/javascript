const coding = ["Javascript","Cpp","Swift","C"];

//forEach loop does not return any values let example 
const values = coding.forEach((item)=>
{
    console.log(item);
    // Javascript
    // Cpp
    // Swift
    // C
// if u also write return it will give u same result
    
})
console.log(values); //undefined

//for these used filters
const num = [1,2,3,4,5,6,7,8,9]
const ne = num.filter((num)=> num>4)
console.log(ne); //[ 5, 6, 7, 8, 9 ]
// if u want to write wit {}
//write return keywords
const n = num.filter((nums)=>
{
    return nums>4
})
console.log(ne); //[ 5, 6, 7, 8, 9 ]

