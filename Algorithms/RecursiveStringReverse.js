/* 
  Recursively reverse a string
  helpful methods:
  str.slice(beginIndex[, endIndex])
  returns a new string from beginIndex to endIndex exclusive
*/

const str1 = "abc";
const expected1 = "cba";

const str2 = "";
const expected2 = "";

/**
 * Recursively reverses a string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given str reversed.
 *
 * 1. Edge Cases ?
 * 2. Base Case -> Required
 * 3. Recursive call -> Required
 */
function reverseStr(str) {
  //reversing itself is just itself, also base case
  if (str.length <= 1) return str;
  //pluck last letter, place before rest of stuff
  return str[str.length - 1] + reverseStr(str.slice(0, -1));
}

/*
console.log(reverseStr(str1))
console.log(reverseStr(str2))
console.log(reverseStr('abcdefghijkl'))
*/
