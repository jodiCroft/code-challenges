// var isAnagram = function (s, t) {
//     If the two strings are different sizes, then return false right away
//   if (s.length !== t.length) return false;

//     Create two objects to hold the counts of each letter of each string
//   let sCount = {};
//   let tCount = {};

//   Fill up the first object with counts of first string characters
//   for (let el in s) {
//     let char = s[el];
//     sCount[char] = sCount[char] ? ++sCount[char] : 1;
//   }

//     Fill up the second object with the counts of second string characters
//   for (let el in t) {
//     let char = t[el];
//     tCount[char] = tCount[char] ? ++tCount[char] : 1;
//   }

//     Loop the length of one of the strings (they will be the same length at this point) to check if second object's count of each character of the second string is NOT the same as the first object's count of the same character and retun false if so.
//   for (let i = 0; i < t.length; i++) {
//     if (tCount[t[i]] !== sCount[t[i]]) {
//       return false;
//     }
//   }

//     Once through the whole check, if didn't return false, then return true
//   return true;
// };

// s = "rat", t = "car"
// "anagram", t = "nagaram"

// REFACTORED CODE BELOW
// Improvements:
//     Only one Object
//     Decremented count of each char as we checked through the object and return false if the count
//     is checked and it's 0 or it's not in there at all
//     Renamed a few variables to be more readable
//     Identified as O(n) time complexity. No nested loops

var isAnagram = function (s, t) {
  //     If the two strings are different sizes, then return false right away
  if (s.length !== t.length) return false;

  //     Create an object to hold the count of the first string
  let count = {};

  //   Fill up the object with counts of first string characters. Adding one if it's already in there, or initializing it with 1 if it's the first time it's being added
  for (let el in s) {
    let char = s[el];
    count[char] = count[char] ? ++count[char] : 1;
  }

  //     Loop the length of one of the strings (they will be the same length at this point) to check if each character in the second string is either in the count object with at least a count of 1 (a count of 0 will be falsey) and if not, return false.
  for (let i = 0; i < s.length; i++) {
    let char = t[i];
    if (!count[char]) {
      return false;
    }

    //       If it is in there, decrement the count of that character. Doing this because if it decrements down to 0, this will trigger the above if statement to return false because there would be zero of that character left. And if it gets to 0, and then doesn't encounter another one of that character, it will get all the way through the check and eventually return true below.
    else --count[char];
  }

  //     Once through the whole check, if didn't return false, then return true
  return true;
};
