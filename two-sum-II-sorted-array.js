/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// Given an array of integers that is already sorted in ascending order,
// find two numbers such that they add up to a specific target number.

// The function twoSum should return indices of the two numbers such that
// they add up to the target, where index1 must be less than index2.

// Note:

// Your returned answers (both index1 and index2) are not zero-based.
// You may assume that each input would have exactly one solution and
// you may not use the same element twice.

var twoSum = function (numbers, target) {
  let start = 0;
  let end = numbers.length - 1;
  let answer = [];

  while (start < end) {
    let sum = numbers[start] + numbers[end];
    if (sum === target) {
      answer.push(start + 1);
      answer.push(end + 1);
      return answer;
    } else if (sum > target) {
      end--;
    } else {
      start++;
    }
  }
  return answer;
};

// the array is sorted, so the lowest val will be at start and the largest at end
// since the answer must be the first index less than the second, then do a while loop that's condition is start is less than end
// start at beginning and end and check if that equals target
// if it does, then push those indeces to the answer array and return answer
// if its more than target, then decrement end
// if its less than target, then increment start
// and check again
