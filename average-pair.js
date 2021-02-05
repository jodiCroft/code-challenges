function averagePair(arr, target) {
  // If the array is empty (has no length), return false
  if (!arr.length) return false;

  // Declare the start and end pointers. End will be at the end of the array and start at the beginning
  let start = 0;
  let end = arr.length - 1;

  // Condition that start < end so that they never overlap or go past each other. Check if the average of start and end is equal to target, and true if it is
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;

    if (avg === target) {
      return true;
    }

    // Else decrement end if the average is larger than target, meaning you'll need to decrease a number to try again next time
    else if (avg > target) {
      end--;
    }

    // Finally, if average is less than target, you know you need to increase the number, meaning increment start to try again
    else {
      start++;
    }
  }

  // Return false at the end
  return false;
}

// averagePair([1,2,3], 2.5)
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8);
// averagePair([-1,0,3,4,5,6], 4.1)
// averagePair([], 4)
