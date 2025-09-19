//Destructuring - objects

const userInfo = {
    name: "Mers",
    age: 22,
};

    const { name, age,} = userInfo;

console.log(name, "name");


//Destructuring - Array

const arr = [1, 2, 3, 4, 5];

const [a, b, c, d, e] = arr;

console.log(b, "===");