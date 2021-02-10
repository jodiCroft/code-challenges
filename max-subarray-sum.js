function maxSubarraySum(arr, num) {
  // Edge case: If the array length is less than the num, then return null because there wouldn't be enough nums in the array to sum
  if (arr.length < num) return null;

  //  Set maxSum equal to 0, and tempSum equal to 0. TempSum will be used to compare against maxSum and maxSum will be re-set if temp is larger
  let maxSum = 0;
  let tempSum = 0;

  // Loop through the array the first num of times and add those elements to maxSum
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  // Make tempSum equal to maxSum so that when we slide the window and subtract and add from tempSum it will have the first sum as the starting sum
  tempSum = maxSum;

  // Loop through array starting with i at num, which is 1 after where it ended in the first loop and then add that element to tempSum and subtract from tempSum the element at i - num. So basically shave off one and add one (sliding the window!)
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum + arr[i] - arr[i - num];
    // Reset maxSum with tempSum if it's more than maxSum, otherwise leave it
    maxSum = Math.max(tempSum, maxSum);
  }
  //  Finally, return maxSum
  return maxSum;
}

// maxSubarraySum([100,200,300,400], 2)
maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4);
