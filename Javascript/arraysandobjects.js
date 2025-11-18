//Arrays

//Creating arrays--->You can create array by creating a variable name and array values are stored in the square brackets
//We can store any type of values inside an array.

let arr = ["Mugilan",22,true,null]
console.log(arr)

//Accessing Arrays
let names = arr[0]
console.log(names)

//Counting Elements inside array
console.log(arr.length)

//Adding elements
arr.push("Mechanical Engineer")
console.log(arr)

//Modifying elements
arr[4] = "CS"
console.log(arr)

//Deleting Elements
arr.pop()
console.log(arr)
console.log("=====================================")

//Objects

//An Object is also contains a list of values of different data types it consists of key value pairs

//Creating objects
let obj = {Name:"Mugilan",Age:22,Badhabits:false,null:null}
console.log(obj)

//Accessing Objects
console.log("Name: ",obj.Name)
console.log("Age: ",obj["Age"])

//Length of objects
console.log(obj.length)

//Adding elements
obj.color = "Black"
obj["Food"] = "Biriyani"
console.log(obj)

//Modifying elements
obj.color = "Pink"
obj["Food"] = "Poori"
console.log(obj)

//Deleting elements
delete obj.color
delete obj["Food"]
console.log(obj)