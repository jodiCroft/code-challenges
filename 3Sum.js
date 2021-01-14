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
