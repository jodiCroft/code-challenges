function minSubArrayLen(arr, num) {
  // Check right away if empty array, and return 0 if so
  if (!arr.length) return 0;

  // Set variables for sum, start and end of window, minLength set to Infinity
  let sum = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  // While start is less than arr.length (becuase we want start to be able to go all the way to the end)
  while (start < arr.length) {
    // Check if sum is greater than or equal to num and if it is, make minLength equal to whatever is less minLength or end - start(because end minus start will be the length of the subarray). Then minus from sum arr[start] which is sliding the window towards the right by shaving off start. Then increment start
    if (sum >= num) {
      minLen = Math.min(minLen, end - start);
      sum -= arr[start];
      start++;
    }
    // Check if sum is less than num AND end is less than arr.length, because we want end to be able to go all the way to the end, but not past the end. If it is, then arr[end] to sum and increment end.
    else if (sum < num && end < arr.length) {
      sum += arr[end];
      end++;
    }
    // Current total is less than num but end is > arr.length. Breaks out of loop or else will be an infinite loop
    else {
      break;
    }
  }
  // If minLen is still Infinity then return 0, or return minLen
  return minLen === Infinity ? 0 : minLen;
}

minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55);
