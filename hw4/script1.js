let arrayOfIntegers = [-9, -105, -9, -9, -9, -9, 6, 105];
let arrayOfLonelyIntegers = [];
let temp = 0;
let negativepair = 0;

function lonelyInteger(array) {
  while (array.length > 1) {
    console.log(`array.length: ${array.length}`);
    let temp = array.shift();
    negativepair = array.find((number) => {
      if (number == -temp) {
        array.splice(array.indexOf(number), 1);
        return true;
      } else undefined;
    }); //end find
    negativepair ? "" : arrayOfLonelyIntegers.push(temp);
  } //end while
  array.length == 1 ? arrayOfLonelyIntegers.push(array[0]) : "";
  console.log(`LonelyIntegers: ${[...new Set(arrayOfLonelyIntegers)]}`);
}

lonelyInteger(arrayOfIntegers);
