function findLongestSubstring(str) {
  let longest = 0;
  let start = 0;
  let end = 0;
  let chars = new Set();

  while (end < str.length) {
    let letter = str[end];

    if (!chars.has(letter)) {
      chars.add(letter);
      end++;
    } else {
      chars.delete(str[start]);
      start++;
    }
    longest = Math.max(longest, chars.size);
  }
  return longest;
}

let string = "thecatinthehat";

findLongestSubstring(string);
