//varibles

//1. var
//  var has function scope,not block scope so variables declared with var inside a block are accessible outside the block but within the function.
// we can varible redeclare and reassign the value.
// we can reassign the value but we cannot redeclare the variable in the same scope.



//2. let
  // let has block scope,so variables declared with let inside a block are not accessible outside the block.
// we can not redecleare the varible
// we can reassign the value but we cannot redeclare the variable in the same scope.

//3. const
// let and const are similar but const is used to declare variables that cannot be reassigned after their initial assignment.
// we can not redecleare the varible
// we cannot reassign the value and we cannot redeclare the variable in the same scope.


//4. Hoisting

//5. Scope
//6. Global Scope
//7. Local Scope
//8. Block Scope

const myFunction = () => {
    try {
var x = 10;
var y = 20; // redeclaration
x =50; // reassignment value
console.log(x);

if (true) {

let a = 10
// let b = 20; // redeclaration not allowed
a = 30; // reassignment value



}
    } catch (error) {
        console.log(error);
    }
} 
myFunction();