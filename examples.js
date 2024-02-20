// const users1 = {
//   firstName: "vikash",
//   Age: "21",
//   Address: "Bangalore",
// };

// console.log(users1["Address"]);;

// const allUsers = [
//   {
//     firstName: "Vikash",
//     gender: "male",
//   },
//   {
//     firstName: "Harkirat",
//     gender: "male",
//   },
//   {
//     firstName: "Sneha",
//     gender: "female",
//   },
// ];

// for (let i = 0; i < allUsers.length; i++) {
//   if (allUsers[i]["gender"] == "male") {
//     console.log(allUsers[i]["firstName"]);
//   }
// }

// function findSum(a, b) {
//   return a + b;
// }

// const Value = findSum(2, 3);
// console.log(Value);

//callback . . . . . . . .

// function greet(){
//   console.log("hello world")

// }

// function greetAlient(){
//   console.log("hello alient")
// }

// setTimeout(greetAlient , 1000);

// function startCountdown() {
//   let count = 30; // Initial count value

//   // Update the timer every second
//   const countdown = setInterval(function () {
//     if (count >= 0) {
//       console.log(count) // Display the count
//       count--; // Decrement the count
//     } else {
//       clearInterval(countdown); // Clear the interval when countdown reaches 0
//     }
//   }, 1000); // Update every second (1000 milliseconds)
// }

// // Start the countdown when the window loads
// startCountdown();

// function findLargestElement(numbers) {
//   let biggestNumber = numbers[0];
//   for (let i=0; i < numbers.length; i++) {
//       if (numbers[i] > biggestNumber) {
//           biggestNumber = numbers[i];
//       }
//   }
//   return biggestNumber;
// }

// const numbers = [3, 7, 2, 9, 1];
// console.log(findLargestElement(numbers));

//const intArr = [1, 2, 3];
// const secArr = [4, 5, 6];

// for (let i = 0; i < secArr.length; i++) {
//   intArr.push(secArr[i]);
// }

// console.log(intArr);

// function functio(str) {
//   console.log(str);
// }

// intArr.forEach(functio);

//class and objects

// const dog = {
//   name: "Bruno",
//   legCount: 4,
//   bark: "bhow bhow",
// };

// const cat = {
//   name: "cat",
//   legCount: 4,
//   bark: "meow meow",
// };

//console.log("Animal" +" "+ dog["name"] + " speaks " + dog["bark"]);

// function printStr(animal) {
//   console.log("Animal" + " " + animal["name"] + " speaks " + animal["bark"]);
// }
// printStr(dog);
// printStr(cat);

// class Animal {
//   constructor(name, legCount, bark) {
//     this.name = name;
//     this.legCount = legCount;
//     this.bark = bark;
//   }
//   speaks(){
//     console.log("Animal" + " " + this.name + " speaks " + this.bark);
//   }
// }

// let dog  = new Animal("Bruno", 4,"bhow bhow") //object
// let cat = new Animal("cat", 4, "meow meow")

// dog.speaks()
// cat.speaks()

// const currentDate = new Date();
// console.log(currentDate.getDate());
// console.log(currentDate.getMonth() + 1); //Months are zero-based, so add 1 to get the correct month
// console.log(currentDate.getFullYear());

// function dateMethods() {
//   const currentDate = new Date();
//   console.log("Current Date:", currentDate);

//   // Getting various components of the date
//   console.log("Date:", currentDate.getDate());
//   console.log("Month:", currentDate.getMonth() + 1); // Months are zero-indexed, so adding 1
//   console.log("Year:", currentDate.getFullYear());
//   console.log("Hours:", currentDate.getHours());
//   console.log("Minutes:", currentDate.getMinutes());
//   console.log("Seconds:", currentDate.getSeconds());

//   // Setting components of the date
//   currentDate.setFullYear(2022);
//   console.log("After setFullYear:", currentDate);

//   currentDate.setMonth(5); // Setting month to June (zero-indexed)
//   console.log("After setMonth:", currentDate);

//   // Getting and setting time in milliseconds since 1970
//   console.log("Time in milliseconds since 1970:", currentDate.getTime());

//   const newDate = new Date(2023, 8, 15); // Creating a new date
//   console.log("New Date:", newDate);
// }

// // Example Usage for Date Methods
// dateMethods();

//stringify and parse

// const user = {
//   name: "vikash",
//   age: 21,
//   gen: "male",
// };
// console.log(user["name"]);
// const newUser = JSON.stringify(user);
// console.log(newUser["name"]);

//callback functions

function square(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}

function sumOfSquare(a, b, fn) {
  val1 = fn(a);
  val2 = fn(b);
  return val1 + val2;
}

// function sumofCube(a, b) {
//   val1 = cube(a);
//   val3 = cube(b);
//   return val1 + val3;
// }

const ans = sumOfSquare(2, 3, cube);
// const answ = sumofCube(2, 3);
console.log(ans);
// console.log(answ);

