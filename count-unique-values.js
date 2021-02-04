function countUniqueValues(arr) {
  if (!arr.length) return 0;

  let i = 0;
  let j = 1;

  while (j < arr.length) {
    if (arr[i] === arr[j]) {
      j++;
    } else {
      i++;
      arr[i] = arr[j];
      j++;
    }
  }
  return i + 1;
}

// declare my two pointers let i = 0, let j = 1
// start with the first element in the array, which will be the first unique value, while loop
// condition of the loop would be while j < arr.length
// if(arr[i] === arr[j]){
//   j++
// }
// if(arr[j] > arr[i]){
//   i++
//   arr[i] = arr[j]
// j++
// }
// return i+1

let one = [1, 1, 1, 1, 1, 2];
let two = [1, 2, 3, 4, 4, 4, 4, 7, 12, 12, 13];
let three = [0];
let four = [-2, -1, -1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let five = [1, 1, 2, 2, 3, 3, 4, 4];
let six = [];

countUniqueValues(three);
