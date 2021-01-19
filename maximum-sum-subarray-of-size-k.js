const max__sum_sub_array_of_size_k = function (k, arr) {
  // TODO: Write your code here
  let maxSum = 0,
    tempSum = 0;

  for (let i = 0; i < arr.length - k + 1; i++) {
    tempSum = 0;
    for (let j = i; j < i + k; j++) {
      tempSum += arr[j];
    }
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
};

// Test Cases:
// max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2]);
// Expected output 9
// max_sub_array_of_size_k(2, [2,3,4,1,5])
// Expected output 7
