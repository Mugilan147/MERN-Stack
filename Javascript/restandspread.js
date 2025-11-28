//Array
let arr = [1,2,3,4,5];
let arr2 = [6,7,8];
let arr3 = [...arr,6,7];
console.log(arr3)
//concatenation:
let con = [...arr,...arr2];
console.log(con)

//Objects
let person1 = {name : "Mugilan" , age: 21}
//copy
let person2 = {...person1, place : "thiruvannamalai"};
console.log(person2)
//concatenate
let person3 = {...person1,...person2};
console.log(person3)

//Functions
function add (a,b,...rest){
    console.log(rest)
    console.log(a+b)
}
add(...arr)

console.log("=========================");

//Destructuring

//1.Array Destructuring [on fly]
let array = [1,2,3,4,5,6];
let [a,b,c,d] = array
console.log(a,c)

console.log("=====================");

//2.Object Destructuring
let actor = {names : "Vijay", Title : "Thalapathy" , age : 51};
//i)Dot Notation
console.log(actor.names);

//ii)Bracket Notation
console.log(actor["age"])

//iii)Object Destructuring(on fly)
const {Title , names} = actor;

console.log(Title,names)