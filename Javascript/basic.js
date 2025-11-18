//Variables ---> let,var,const (It is the named container to store the values)
let names = "Mugilan";
//let is the global variable

var age = 21;
//var is used as the local variable
{
    var classes = "1st";
}

const color = "black";
//const is used where we need to store constant values

//operations ---> To do some operations like arithmetic, logical ,comparison,etc,.
let num1 = 10;
let num2 = 12;
let sum = (num1+num2);
console.log(sum)

//Data types ---> It is the type of values which we store in the containers like integer,string,boolean,float,etc,.

let int = 22;
let str = "Mug"
let bool = true;
console.log(typeof(int),typeof(str),typeof(bool))

//Functions ---> Functions is the predefined one which we can create to do a single process again and again inside the whole code wherever needed
//syntax let <function name()> {};

function result(a,b) {
    console.log(a+b)
}
result(10,20)

//if else ---> It helps to run a code where one fails to run

if(age>=18){
    console.log("You are eligible for voting")
}else{
    console.log("You are not eligible")
}
age = 19

//for loop ---> Looping is the thing which executes again and again the same thing until the statement satisfies

for(let i=0; i<11; i++){
    console.log(i);
}