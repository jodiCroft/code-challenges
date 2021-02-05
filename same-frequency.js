function sameFrequency(num1, num2) {
  // Convert both nums to strings so we can use the length for looping later
  let firstNum = num1.toString();
  let secondNum = num2.toString();

  // Check the edge case that if they are different lengths, return false bc they can't have the same frequency of numbers
  if (firstNum.length !== secondNum.length) return false;

  // Declare a variable object to hold the count of each number
  let numHash = {};

  // Loop through the numbers in the first number to create the hash and iniliaze with 1 or increment if already there
  for (let i = 0; i < firstNum.length; i++) {
    numHash[firstNum[i]] = ++numHash[firstNum[i]] || 1;
  }

  // Loop through the second number and check if it's in the hash. If not, return false. Otherwise, decrement the count in the hash to be accounted for
  for (let i = 0; i < secondNum.length; i++) {
    if (!numHash[secondNum[i]]) return false;
    else {
      --numHash[secondNum[i]];
    }
  }

  // Once all the way through checking the second numbers against what is in the hash, return true
  return true;
}

// Go through num1 and create an object to hold the number and the number of times it is in the number
// Go through num2 and see if its in the object, and if it is, subtract 1
// If its not, return false
// Once all the way through checking the 2nd number, return true

let one = 3589578;
let two = 5879355;
let three = 34;
let four = 14;

sameFrequency(one, two);
