// let str = "is2 Thi1s T4est 3a"

const orderString = function (str) {
  let arr = str.split(" ");
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr.find((char) => char.includes(i + 1)));
  }
  return newArr.join(" ");
};

// break up the string into individual words in an array str.split(" ")
// For loop through the array for(let i = 0; i < arr.length; i++) {
//  arr.find(char => char.includes(i+1))
// }
//

orderString("is3 Thi1s T4est 2a");
