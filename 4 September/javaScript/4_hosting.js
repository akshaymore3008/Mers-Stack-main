// Define variables first to avoid hoisting issues
var a = 10; // Global scope
console.log(a); // Output: 10

// `let b` must be declared before use due to TDZ
let b = 20; // Block scope
console.log(b); // Output: 20

// Regular function (hoisted, can be called anywhere)
function myFunction() {
    try {
        console.log("Hello Normal Function");
    } catch (error) {
        console.log("Error in myFunction:", error);
    }
}

// Arrow function (not hoisted, must be defined before calling)
const callFuction = () => {
    try {
        console.log("Hello Arrow Function");
    } catch (error) {
        console.log("Error in callFuction:", error);
    }
};

// Call functions
myFunction();
callFuction();