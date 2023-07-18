// let userInput = +prompt("pick a month :)  ");
// let userInput = new Date().getMonth();
let userInput = 15;
let dayCount = -1;
let isLeapYear = "";

try {
  checkDays(userInput);
} catch (error) {
  return "OPS tehere is an ERROR" + error;
}

// programm to categorize month number
function checkDays() {
  switch (userInput) {
    case 1 || 3 || 5 || 7 || 8 || 10 || 12:
      dayCount = 31;
      break;
    case 4 || 6 || 9 || 11:
      dayCount = 30;
      break;
    case 2 && checkLeapYear(new Date().getFullYear()):
      dayCount = 28;
      break;
    case 2 && !checkLeapYear(new Date().getFullYear()):
      dayCount = 29;
    default:
      break;
  }
  dayCount == 0
    ? console.log(`month is not in the valid range(1-12): ${userInput}`)
    : console.log(`day count = ${dayCount}, month is: ${userInput}`);
}
// program to check leap year
function checkLeapYear(year) {
  if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
    return (isLeapYear = true);
  } else {
    return (isLeapYear = false);
  }
}
