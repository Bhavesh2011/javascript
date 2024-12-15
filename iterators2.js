// for of

const arr = [10,20,30,40,50,60,70]

for (const num of arr) {
    // console.log(num);
    
}
const greeting = "Helklo world"
for (const greet of greeting) {
    console.log(`Each chare is ${greet}`);
    
}

//maps
//in the fomrat of key and value 
const map = new Map()
map.set('In',"india");
map.set('USA',"United state of america")
map.set('fr',"France")

console.log(map); 
// = output
// Map(3) {
//     'In' => 'india',
//     'USA' => 'United state of america',
//     'fr' => 'France'
//   }
// not consider same value double 

// forof loop array string maps set
for (const [key,value] of map) {
    console.log(key,value);

}
// In india
// USA United state of america
// fr France

const obj = { 
    'Game ' : 'NFS',
    'Game1 ' : 'NFS1',
    'Game2' : 'NFS2',
    'Game3' : 'NFS3',
}
// for (const ele of obj) {
//     console.log(key,":",value); // object are not iterables
    
// }
//forin = for the enumerated things in the objects 
for (const key in obj) {
   console.log(key);
   
}
//foreach - The forEach() method is a built-in array method that executes a provided function once for each array element. It is specifically for arrays and does not work on other iterable objects like strings or sets directly.
// Specifically for arrays to perform a function on each element.
const coding = [1,2,3,4,5,6]
coding.forEach( function (item) {
   console.log(item);
    
});
//means the input is taken and you can accept all the input and perform operations on it

const oding = [
    {
        language : "Javascript",
        file : "js",
    },
    {
        language : "cpp",
        file : "cpp",
    },
    {
        language : "Python",
        file : "py",
    }
]
oding.forEach( (items) =>{
    console.log(items.language);
    
})