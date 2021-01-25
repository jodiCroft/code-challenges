// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the
// encoded_string inside the square brackets is being
// repeated exactly k times. Note that k is guaranteed
// to be a positive integer.

// You may assume that the input string is always valid;
// No extra white spaces, square brackets are well-formed, etc.

// Furthermore, you may assume that the original data does
// not contain any digits and that digits are only for those
// repeat numbers, k. For example, there won't be input like 3a or 2[4].

var decodeString = function (s) {
  let nums = s.match(/[0-9]+/g);
  let numLeft = 0;
  let start = 0;
  let end = 0;
  s = s.split("");

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "[") {
      start = i;
      numLeft++;
    }
    if (s[i] === "]") {
      end = i;
      let replace = s.slice(start + 1, end);

      replace = replace.toString();
      replace = replace.repeat(parseInt(nums[numLeft - 1]));
      nums.splice(numLeft - 1, 1);
      s.splice(start - 1, end - (start - 2), replace);
      start = 0;
      end = 0;
      i = 0;
      numLeft = 0;
    }
  }
  return s.join("").match(/[A-Z]/gi).join("");
};
