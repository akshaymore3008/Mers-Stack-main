//Synchronous

console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)


//Asynchronous

console.log("Start")

setTimeout(() => {   //Asynchronous operation
    console.log("Secound")
},1000);


console.log("last")

//1 . callbacks

function myFunction(newfunction) {
    console.log("callback example")
    newfunction();
}
function secondFunction() {
    console.log("call back function get call")
}
myFunction(secondFunction);


// 2. async/await
// async/await is latested version of promises,if we want  to do any DB call that time we have to use async/await
const getData = async () => {
    try { 
        const userData = await User.find(); // Simulating an asynchronous operation
    } catch (error) {
        console.log(error);
    }
}
// 3. Callbacks
