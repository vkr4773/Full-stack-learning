// const allUsers = [
//     {
//       firstName: "Vikash",
//       gender: "male",
//     },
//     {
//       firstName: "Harkirat",
//       gender: "male",
//     },
//     {
//       firstName: "Sneha",
//       gender: "female",
//     },
//   ];
  
// for (let i = 0; i < allUsers.length; i++) {
// if (allUsers[i]["gender"] == "male") {
//     console.log(allUsers[i]["firstName"]);
// }
// };



//callback function

// function sum(num1, num2, fntoCall) {
//     let result = num1 + num2;
//     fntoCall(result);
// }

// function displayResult(data) {
//     console.log("Result of the sum is: " + data);
// }

// function displayResultPassive(data) {
//     console.log("Sum's result is: " + data);
// }

// const result = sum(2, 3 , displayResult);


// function calculateArithmetic(a,b,arithmeticFinalFunction){
//     const result = arithmeticFinalFunction(a,b);
//     return result;
// }

// function sum(a,b){
//     return a+b;
// }

// function minus(a,b){
//     return a-b;
// }

// const value = calculateArithmetic(2,3,sum);
// console.log(value);


// function calculateSum(){
//     console.log("Sum is: ");
//     return sum(10,20);
// }
// function sum(a,b){
//     return a+b;
// }
// setTimeout(calculateSum,1000)



//async function
// const fs = require("fs")

// fs.readFile("a.txt", "utf-8" , function(err,data){
//     console.log(data);
// }
// )

// console.log("Hi from code")


//Promise Class

/* var d = new Promise(function(resolve){
    setTimeout(function(){
        resolve("Hello World");
    }, 1000)
});

function callback(d){
    console.log(d);
}
console.log(d);
d.then(callback); */

//setTimeout

console.log("HI");

setTimeout(function(){
    console.log("Hello from setTimeout");
}, 1000);
let a = 0;
for (let i = 0; i < 10; i++) {
    a = a+i;
}

console.log(a);
