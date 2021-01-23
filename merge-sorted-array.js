// Given two sorted integer arrays nums1 and nums2,
// merge nums2 into nums1 as one sorted array.

// The number of elements initialized in nums1 and nums2
// are m and n respectively. You may assume that nums1 has a size
// equal to m + n such that it has enough space to hold additional
// elements from nums2.

var merge = function (nums1, m, nums2, n) {
  for (i = 0; i < n; i++) {
    nums1.pop();
  }
  let pointer1 = 0;
  let pointer2 = 0;
  while (pointer1 < m + n && pointer2 < n) {
    if (nums1[pointer1] < nums2[pointer2]) {
      pointer1++;
    } else {
      nums1.splice(pointer1, 0, nums2[pointer2]);
      pointer1++;
      pointer2++;
    }
  }
  return nums1;
};

// [1,2,3,0,0,0]
// answer = []
// nums1
// Have a pointer at nums1[0] and at nums2[0] and increment nums1
// pointer until the element is > nums2
// and then put nums2[pointer2] into nums1 before nums1[pointer1]
// splice .splice(pointer1, 0, nums2[pointer2]) increment pointer2
// and pointer1
