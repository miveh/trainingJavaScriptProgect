"use strict"; //کاربردش برای من اینه که میتونه ارور هارو نشون بده مثلا اگر نزاریمش یه سری ارور های سینتکسی رو نشون نمیده
/*

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log("I can Drive");

const interface = "Audio";
const if = 23;
*/

// let js = "amazing";
//نحوه تعریف if

// if (js === 'amazing') alert('java script is fun');

//برای نمایش مختوا در کنسول
// console.log(40 + 8 + 23 - 10);

// console.assert.log("value");
// console.assert.log(25);
// console.assert.log("25");

//جاوا اسکریپت دقیقا مقدار اورجینال اساین شده رو برمیگردونه
// console.assert.log("js");

//variable :1-کمل کییس بنویسیم
//          2-با اعداد شروع نمیشوند
//          3-علامت $,_ قابل استفاده هستند
//          4-حواسم به کی ورد های رزرو شده باشه
//          5-شروع با حروف بزرگ برای بحث oop هست
//          6-سعی کنیم از وریبل های با معنی استفاده کنیم

// if & switch statement:
/*
const day = "friday";
switch (day) {
  case "monday": // day === 'monday'
    console.log("plan course sructure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("write code example");
    break;
  case "friday":
    console.log("record videos");
    break;
  case "sunday":
    console.log("Enjoy the weekend ;D");
    break;
}

if (day === "monday") {
  console.log("plan course sructure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("prepare theory videos");
} else if (day === "wednesday" || day === "sunday") {
  console.log("write code example");
} else {
  console.log("Enjoy the weekend ;D");
}
*/
//W02-...expressions

/*
if (23 > 10) {
  const str = "23 is bigger";
}

const me = "zaZA";
console.log(`I'm ${2023 - 1998} years old ${me}`);
*/

// W02-....thernary statement: that has 3 part:condition part-if part -else part

/*
const age = 24;
age >= 18
  ? console.log("I like to drink wine 🎅")
  : console.log("I like to drink water 👼");

const drink = age >= 18 ? "wine🍷" : "water🥤";
console.log(drink);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);
*/

//w02 -part 3-Challenge:

/*
const bill = 689;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`bill was ${bill}, tip was ${tip}, and total value ${tip + bill}`);
*/

//w02 - functions------------------------------------------------
/*
function logger() {
  console.log("my name is zaZA");
}

//Calling the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juise with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

//Calling fruiteProcessor
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
*/

//w02-function declarations vs expressions-------------------------------

/*
function calcAge1(birthYear) {
  const age = 2023 - birthYear;
  return age;
}

//Calling calcAge1
const age1 = calcAge1(1998);
console.log(age1);

//این جا دیگه این یه تابع نیست و یه ولیو هست پس میشه داخل یه وریبل بریزیمش
const calAge2 = function (birthYear) {
  return 2023 - birthYear;
};

const age2 = calAge2(1998);
console.log(age1, age2);
*/

//w03--Arrow function---------------------------------------

//without return keyword

/*
const calAge = (birthYear) => 2023 - birthYear; //easy and fast
const age = calAge(1998);
console.log(age);

//مناسب وقتی که بیشتر از یک پارامتر داریم
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retirement in ${retirement}`;
};

console.log(yearsUntilRetirement(1998, "zaZA"));

//Multiline arrow functions:

let sum = (a, b) => {  // the curly brace opens a multiline function
  let result = a + b;
  return result; // if we use curly braces, then we need an explicit "return"
};




*/

//w03 - function calling function----------------------------------

/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  // console.log(apples, oranges);
  const juice = `Juise with ${applePieces} pieces of apples and
   ${orangePieces} pieces of oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 2));
*/

//part2-coding challenge #1
/*
const calcAerage = (a, b, c) => (a + b + c) / 3;
console.log(calcAerage(1, 2, 3));

//test1
const scoreDolphines = calcAerage(44, 23, 71);
const scoreKoalas = calcAerage(65, 54, 49);
console.log(scoreDolphines, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`dol win🏆 `);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`koalas win 🏆`);
  } else {
    console.log(`no teams wins ...`);
  }
};

checkWinner(scoreDolphines, scoreKoalas);
checkWinner(576, 111);
*/

//w03 - array
//array elements cannot be accessed using arbitrary strings as indexes,
//JavaScript arrays are zero-indexed
//stores in memory
//the data structure named stack.

// it is copied by reference:

const friend1 = "Michel";
const friend2 = "Steven";
const friend3 = "zahra";

// 2 type for define ...
const friends = ["Micheal", "Steven", "Zahra"]; //litteral syntax
const years = new Array(1991, 1199, 2020);

const firstName = "zaZa";
const zahra = [firstName, 1998, 2023 - 1998, friends];

//push return lenghth of Array
const newLenght = friends.push("mivehchi");
//add element first of array
friends.unshift("sara");
//remove from end
const popedElement = friends.pop();
friends.unshift(popedElement);
//remove from first
friends.shift();

//return index of value..
console.log(friends.indexOf("sara"));
//return boolean if vaue in array or no
console.log(friends.includes("sara"));

console.log(friends);
//Get last elements with “at”
let fruits = ["Apple", "Orange", "Plum"];

// same as fruits[fruits.length-1]
alert(fruits.at(-1)); // Plum

let fruits1 = ["Apple", "Orange", "Plum"];

// iterates over array elements
for (let fruit of fruits1) {
  alert(fruit);
}
//Generally, we shouldn’t use for..in for arrays.
let arr = ["Apple", "Orange", "Pear"];

for (let key in arr) {
  alert(arr[key]); // Apple, Orange, Pear
}

//lenght  is greatest numeric index plus one.
let fruits12 = [];
fruits[123] = "Apple";

alert(fruits.length); // 124

//Another interesting thing about the length property is that it’s writable.
let arra = [1, 2, 3, 4, 5];

arr.length = 2; // truncate to 2 elements
alert(arr); // [1, 2]

delete arra[1]; // remove "go"
// now arr = ["I",  , "home"];
alert(arr.length); // 3

//arr.splice(start[, deleteCount, elem1, ..., elemN])
let arr = ["I", "study", "JavaScript"];

arr.splice(1, 1); // from index 1 remove 1 element

alert(arr); // ["I", "JavaScript"]
let arr = ["I", "study", "JavaScript", "right", "now"];

// remove 3 first elements and replace them with another
arr.splice(0, 3, "Let's", "dance");

alert(arr); // now ["Let's", "dance", "right", "now"]
let arr = ["I", "study", "JavaScript", "right", "now"];

// remove 2 first elements
let removed = arr.splice(0, 2);

alert(removed); // "I", "study" <-- array of removed elements

let arr = ["I", "study", "JavaScript"];

// from index 2
// delete 0
// then insert "complex" and "language"
arr.splice(2, 0, "complex", "language");

alert(arr); // "I", "study", "complex", "language", "JavaScript"
// concat
let arr = [1, 2];

// create an array from: arr and [3,4]
alert(arr.concat([3, 4])); // 1,2,3,4

// create an array from: arr and [3,4] and [5,6]
alert(arr.concat([3, 4], [5, 6])); // 1,2,3,4,5,6

// create an array from: arr and [3,4], then add values 5 and 6
alert(arr.concat([3, 4], 5, 6)); // 1,2,3,4,5,6

// Iterate: forEach
// The arr.forEach method allows to run a function for every element of the array.

// The syntax:
// for each element call alert
["Bilbo", "Gandalf", "Nazgul"].forEach(alert);

//find function
let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];

let user = users.find((item) => item.id == 1);

alert(user.name); // John
let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
  { id: 4, name: "John" },
];

// Find the index of the first John
alert(users.findIndex((user) => user.name == "John")); // 0

// Find the index of the last John
alert(users.findLastIndex((user) => user.name == "John")); // 3

//filter
let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];

// returns array of the first two users
let someUsers = users.filter((item) => item.id < 3);

alert(someUsers.length); // 2
//map
let result = arr.map(function (item, index, array) {
  // returns the new value instead of item
});
let arr = [1, 2, 15];

arr.sort(function (a, b) {
  return a - b;
});

alert(arr); // 1, 2, 15
//reduce
let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current) => sum + current, 0);

alert(result); // 15

//
