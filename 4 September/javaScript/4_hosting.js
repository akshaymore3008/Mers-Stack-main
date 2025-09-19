// Regular function
function myFunction() {
    try {
        console.log("Hello Normal Function");
    } catch (error) {
        console.log("Error in myFunction:", error);
    }
}

// Arrow function
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