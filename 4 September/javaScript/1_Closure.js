//Var => Function Scope - (global Scope any where we can access in function ex. inside function)
//let , const => Block Scope - (global Scope any where we can access in function ex. inside function)
//const => Block Scope - (global Scope any where we can access in function ex. inside function)


function firstFunction() {
  const name = "Akshay";

  function secondFunction() {
    const surname = "Kumar";

    var number = 10;
if (true) {
  var finalnumber = 20; // var is function scope
const a = "30"; // const is block scope


    console.log(name + " " + surname);
  }
  console.log(name, "name");

  
  console.log(number, "number"); 

// cosole.log(surname , "surname");
// console.log(number , "number");
  secondFunction();
}

firstFunction();
