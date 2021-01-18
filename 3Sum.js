var threeSum = function (nums) {
  let solution = [];
  nums.sort((a, b) => a - b);
  for (let firstIndex = 0; firstIndex < nums.length - 2; firstIndex++) {
    if (nums[firstIndex] === nums[firstIndex - 1]) {
      continue;
    }
    let leftIndex = firstIndex + 1;
    let rightIndex = nums.length - 1;
    while (leftIndex < rightIndex) {
      let sum = nums[firstIndex] + nums[leftIndex] + nums[rightIndex];
      if (sum === 0) {
        solution.push([nums[firstIndex], nums[leftIndex], nums[rightIndex]]);
        while (nums[leftIndex] === nums[leftIndex + 1]) leftIndex++;
        leftIndex++;
        while (nums[rightIndex] === nums[rightIndex - 1]) rightIndex--;
        rightIndex--;
      } else if (sum > 0) {
        rightIndex--;
      } else leftIndex++;
    }
  }
  return solution;
};

// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Example 2:

// Input: nums = []
// Output: []
// Example 3:

// Input: nums = [0]
// Output: []

// Constraints:

// 0 <= nums.length <= 3000
// -105 <= nums[i] <= 105
