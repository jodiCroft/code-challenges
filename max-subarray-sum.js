function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;

  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum += arr[i] - arr[i - num];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}

// Make a variable maxSum
// Make a var temp
// Get the first maxSum by adding n number of elements (whatever num is)
// for(let i = 0; i < num; i++) {
//  maxSum += arr[i]
// }

// make tempSum = maxSum

// Loop through the array starting at num, bc that will allow you to subtract off the front and add to back to slide the window based on where num is.
// for(let i = num; i < arr.length; i++) {
// Take tempSum and add arr[i], and subtract arr[i-num] so this shaves off from the front and expands the window to the right
// tempSum += arr[i] - arr[i-num]
// Take the Math.max of tempSum and MaxSum and make that maxSum
// }

// return maxSum

maxSubarraySum([100, 200, 300, 400], 2);
