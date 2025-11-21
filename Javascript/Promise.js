//Promise is the thing where javascript promises us that a value is either coming or not but it will take time "It is a way to handle asynchronous Executions"

async function req (e) {
    try {
    const res = await fetch("https://dummyjson.com/products");
    const ans = await res.json()
    console.log(ans)
    }
    catch(err) {
        console.log(err)
    }
}
req()

console.log("===================================")

const res = fetch("https://dummyjson.com/products")
.then((e)=>{
    return e.json()
})
.then((e)=>{
    console.log(e)
})
.catch((err)=>{
    console.log(err)
})