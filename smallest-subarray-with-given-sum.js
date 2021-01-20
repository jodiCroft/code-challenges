// Problem Statement #
// Given an array of positive numbers and a positive number ‘S,’
// find the length of the smallest contiguous subarray whose sum is
// greater than or equal to ‘S’. Return 0 if no such subarray exists.

const smallest_subarray_with_given_sum = function (s, arr) {
  let currentSum = 0;
  let minLength = Infinity;
  let start = 0;

  for (let end = 0; end < arr.length; end++) {
    currentSum += arr[end];
    while (currentSum >= s) {
      if (end - start + 1 < minLength) minLength = end - start + 1;
      currentSum -= arr[start];
      start++;
    }
  }
  if (minLength === Infinity) return 0;
  else return minLength;
};

// TEST CASES:
smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 3, 2]);
smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 8]);
smallest_subarray_with_given_sum(8, [3, 4, 1, 1, 6]);
