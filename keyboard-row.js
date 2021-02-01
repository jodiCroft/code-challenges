/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  let answer = [];
  let chars = {
    q: 1,
    w: 1,
    e: 1,
    r: 1,
    t: 1,
    y: 1,
    u: 1,
    i: 1,
    o: 1,
    p: 1,
    a: 2,
    s: 2,
    d: 2,
    f: 2,
    g: 2,
    h: 2,
    j: 2,
    k: 2,
    l: 2,
    z: 3,
    x: 3,
    c: 3,
    v: 3,
    b: 3,
    n: 3,
    m: 3,
  };

  let word = 0;

  while (word < words.length) {
    let letter = 0;
    let row = chars[words[word][letter].toLowerCase()];
    while (letter < words[word].length) {
      if (chars[words[word][letter].toLowerCase()] !== row) {
        break;
      }
      if (letter === words[word].length - 1) {
        answer.push(words[word]);
      }
      letter++;
    }
    word++;
  }
  return answer;
};

// Make a hash dictionary with each char and its corresponding row as the key
// Make an answer array empty []
// First loop to get the word in words
// Second loop to get the letter in word
// Once have the letter,
// make it to lowercase
// and then see what row it's in by checking the chars[word[letter]]
// and store the row in a row variable that I declare
// and increment letter
// Now check if the next letter has the matching row as whats hanging out in the row var, by checking row === chars[word[letter]]
//         If yes, increment letter++
//             If no, Then increment word++
// Outside of that letter loop once gotten through the whole word, answer.push(words[word])

// return answer
