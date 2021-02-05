// Given an integer array nums, find the contiguous subarray (containing at least one number)
// which has the largest sum and return its sum.

var maxSubArray = function (nums) {
  //     Set a variable called maxSum equal to negative infinity so that the first time maxSum gets set in the function, it will automatically become the max
  let maxSum = -Infinity;

  //     Set a variable called tempSum to 0. This will hold the current sum that we will compare to the maxSum and gets re-set each time through the loop
  let tempSum = 0;

  //     Create a loop through the nums array
  for (let i = 0; i < nums.length; i++) {
    //         Check if nums at the current index is greater than the tempSum plus that num, and if so, replace tempSum with that num, which will basically re-start the starting sum next time though
    if (nums[i] > tempSum + nums[i]) {
      tempSum = nums[i];
    }
    //         Otherwise, add that num to tempSum. Could also be tempSum+=nums[i]
    else {
      tempSum = tempSum + nums[i];
    }
    //         Then check if tempSum is greater than maxSum, and if so, replace maxSum with tempSum and then go through the loop again
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }
  return maxSum;
};
