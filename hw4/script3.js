/*test data*/
// let userInput = +prompt("pick a month :)  ");
// let userInput = new Date().getMonth();
let userInput = 4;

// let userYear = +prompt("year: ")
// let userYear = new Date().getFullYear()
// let userYear = 2020
let dayCount = -1;
let isLeapYear = "";
let rangeMonth1 = [1, 3, 5, 7, 8, 10, 12];
let rangeMonth2 = [4, 6, 9, 11];

try {
  checkDays(userInput);
} catch (error) {
  return "OPS!!  an ERROR" + error;
}

// programm to categorize month number
function checkDays(monthNumber) {
  switch (true) {
    case rangeMonth1.includes(monthNumber):
      dayCount = 31;
      break;
    case rangeMonth2.includes(monthNumber):
      dayCount = 30;
      break;
    case 2:
      checkLeapYear(new Date().getFullYear())
        ? (dayCount = 29)
        : (dayCount = 28);
  }
  return console.log(dayCount);
}
// program to check leap year
function checkLeapYear(year) {
  if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
    return (isLeapYear = true);
  } else {
    return (isLeapYear = false);
  }
}
