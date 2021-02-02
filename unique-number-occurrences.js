/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] in obj)) {
      obj[arr[i]] = 1;
    } else obj[arr[i]]++;
  }

  console.log(obj);

  let vals = Object.values(obj);
  if (new Set(vals).size === vals.length) {
    return true;
  } else return false;
};
