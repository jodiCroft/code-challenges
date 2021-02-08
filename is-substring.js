function isSubsequence(str1, str2) {
  // Set 2 pointers to zero
  let pointer1 = 0;
  let pointer2 = 0;

  // Loop through with the condition that pointer2 is less than str2.length because that is the "longer" string that we need to check if str1 is inside of
  while (pointer2 < str2.length) {
    // If the chars are equal, then increment both pointers.
    if (str1[pointer1] === str2[pointer2]) {
      pointer1++;
      pointer2++;
    }
    // If the chars are not the same, increment only pointer2
    else if (str1[pointer1] !== str2[pointer2]) {
      pointer2++;
    }
    // Always check if pointer1 is equal to the length of str1, because that means that we've gotten all the way through string1 which woudn't happen if there weren't matching chars all the way through. If so, return true
    if (pointer1 === str1.length) {
      return true;
    }
  }
  // Once we've gotten to the end of str2, return false because we know that if it never hit the true, then it must be false
  return false;
}

isSubsequence("hello", "hbello wrld");
