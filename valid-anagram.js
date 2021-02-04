var isAnagram = function (s, t) {
  //     If the two strings are different sizes, then return false right away
  if (s.length !== t.length) return false;

  //     Create two objects to hold the counts of each letter of each string
  let sCount = {};
  let tCount = {};

  //   Fill up the first object with counts of first string characters
  for (let el in s) {
    let char = s[el];
    sCount[char] = sCount[char] ? ++sCount[char] : 1;
  }

  //     Fill up the second object with the counts of second string characters
  for (let el in t) {
    let char = t[el];
    tCount[char] = tCount[char] ? ++tCount[char] : 1;
  }

  //     Loop the length of one of the strings (they will be the same length at this point) to check if second object's count of each character of the second string is NOT the same as the first object's count of the same character and retun false if so.
  for (let i = 0; i < t.length; i++) {
    if (tCount[t[i]] !== sCount[t[i]]) {
      return false;
    }
  }

  //     Once through the whole check, if didn't return false, then return true
  return true;
};

// s = "rat", t = "car"
// "anagram", t = "nagaram"
