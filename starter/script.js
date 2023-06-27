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
