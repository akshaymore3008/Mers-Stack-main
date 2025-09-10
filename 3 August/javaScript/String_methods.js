const fullname = "Akshay";

const stringLength = fullname.length;

if (fullname.length > 0) {
    console.log("string length is greater than 0");
} else {
    console.log("string length is Not greater than 0");
}
// 2. toUpperCase() Converts a string to uppercase letters.
console.log(fullname.toUpperCase(),
// 3. toLowerCase() Converts a string to lowercase letters.
console.log(fullname.toLowerCase()));
// 4. trim() Removes extra spaces from both ends of a string.
const extraSpacesName   = "   Akshay   ";
console.log(extraSpacesName.trim());

// 5. charAt() Returns the character at a specified index (position) in a string.
console.log(fullname.charAt(0),);