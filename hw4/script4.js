//test data...
// let userNumbers = [2, 3, 14, 22, 12, 2, 3, 6, 9, 0, 1, 1, 0];
// let userNumbers = [2, 3, 142, 11, 3, 2, 1];
let userNumbers = [2, 3, 14, 22, 5, 6, 66, 0];
// let userNumbers = [0,1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1];

/* bubble sort with swap booloean */
/*
const optimizedBubbleSort = (array) => {
  let isSwapped = false;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j <= array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        isSwapped = true;
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
    if (!isSwapped) {
      return array;
    } else {
      isSwapped = false;
    }
  }
  return array;
};
*/
/* bubble sort optimized --> cocktail sort ---------------------------------------------*/

function cocktailSort(array) {
  let isSwapped = true;
  let start = 0;
  let end = array.length;

  while (isSwapped == true) {
    isSwapped = false;
    for (let i = start; i < end - 1; ++i) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        isSwapped = true;
      }
    }
    if (isSwapped == false) break;
    isSwapped = false;
    end = end - 1;
    for (let i = end - 1; i >= start; i--) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        isSwapped = true;
      }
    }
    start = start + 1;
  }
  return array;
}

// console.log(optimizedBubbleSort(userNumbers));

console.log(cocktailSort(userNumbers));
