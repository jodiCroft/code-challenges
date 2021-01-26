/**
 * @param {string} s
 * @return {number}
 */

//create a Map
//     for loop to go through the string and if the character is not already in the Map, then add it and the Map key is the letter and make the value 1
//     and if it IS in he Map already, increment the value by 1 (++)
//     for loop through the string again and check if the Map.get(s[i]) === 1, and if yes, then return i
// at the very end if nothing comes back with a 1, then return -1

// Given a string, find the first non-repeating character in it and
// return its index. If it doesn't exist, return -1.

var firstUniqChar = function (s) {
  let charMap = new Map();

  for (let i = 0; i < s.length; i++) {
    if (charMap.has(s[i])) {
      charMap.set(s[i], charMap.get(s[i]) + 1);
    } else {
      charMap.set(s[i], 1);
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (charMap.get(s[i]) === 1) {
      return i;
    }
  }
  return -1;
};
