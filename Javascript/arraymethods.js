//Array

let array = [1,2,3,4,5];

//1.Map --> It will act like a for loop (it always returns an array and should have a callback function)
const ans = array.map((i) => {
    console.log(i)
    return i
})
console.log(ans)
console.log("===========================");

//2.Filter --> It will also act like a for loop but it will take a condition (it also always returns an array and have a callback function)
const res = array.filter((i) => {
    return i>2
})
console.log(res)
console.log("==============================");

//3.Reduce --> It is used to reduce a multiple element array into a single element
const red = array.reduce((accumulator,currentValue) => {
    return accumulator+currentValue
})
console.log(red)