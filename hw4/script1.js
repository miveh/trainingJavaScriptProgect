let integers = [-105, 4, -9, 55, 9, 6, 0, 0, 105];
// let integers = prompt("add many numbers: ")
//   .split(",")
//   .map((x) => +x);
let lonelyIntegers = [];
let temp = 0;
let isNegativePair = false;

function lonelyInteger(array) {
  while (array.length > 1) {
    let temp = array.shift();
    array.find((number) => {
      if (number == -temp) {
        array.splice(array.indexOf(number), 1);
        return (isNegativePair = true);
      } else isNegativePair = false;
    }); //end find
    isNegativePair ? "" : lonelyIntegers.push(temp);
  } //end while

  array.length == 1 ? lonelyIntegers.push(array[0]) : "";
  console.log(`LonelyIntegers: ${[...new Set(lonelyIntegers)]}`);
}

lonelyInteger(integers);
