// Using the spread operator syntax, I can use the rest parameter to work with an indefinite number of arguments
function areThereDuplicates(...args) {
  // Sort the arguments so I can compare just ones next to each other
  args.sort();

  // Set the start and end variables - my two pointers
  let start = 0;
  let end = 1;

  // Set up a comparison to check  the args at start and args at end and if they are the same, then return true. Otherwise, if they aren't the same, increment start and end
  while (end < args.length) {
    if (args[start] === args[end]) {
      return true;
    } else {
      start++;
      end++;
    }
  }

  // Return false at the end, meaning it never hit and triggered the true return
  return false;
}

areThereDuplicates(2, 1, 6, 5, 7, 9, 2, 0);
areThereDuplicates("a", "c", "b", "d", "a", "a");
