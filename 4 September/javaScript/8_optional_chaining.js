// Optional Chaining - obj?.property?.subproperty
// Safely access nested properties; returns undefined if a property is missing
const mainObject = {
    name: "Akshay",
    age: 22,
    address: {
        city: "Karad",
        pincode: 110001,
    },
};

console.log("Result:", mainObject?.subObject?.aaa, "==="); // Result: undefined ===