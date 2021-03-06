/*
  Recursive Binary Search
  Input: SORTED array of ints, int value
  Output: bool representing if value is found
  Recursively search to find if the value exists, do not loop over every element.
  Approach:
  Take the middle item and compare it to the given value.
  Based on that comparison, narrow your search to a particular section of the array
*/

const two_nums1 = [1, 3, 5, 6];
const two_searchNum1 = 4;
const two_expected1 = false;

const two_nums2 = [4, 5, 6, 8, 12];
const two_searchNum2 = 5;
const two_expected2 = true;

const two_nums3 = [3, 4, 6, 8, 12, 25];
const two_searchNum3 = 8;
const two_expected3 = true;

/**
 * Add params if needed for recursion
 * Recursively performs a binary search (divide and conquer) to determine if
 * the given sorted nums array contains the given number to search for.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @param {number} searchNum
 * @returns {boolean} Whether the searchNum was found in the sortedNums array.
 */
function binarySearch(sortedNums, searchNum) {
  console.log(sortedNums);
  //base case, searched entire sortedNums and not found searchNum
  if (sortedNums.length <= 1 && sortedNums[0] !== searchNum) return false;
  let midPoint = Math.floor(sortedNums.length / 2);
  //we've found our number
  if (sortedNums[midPoint] === searchNum) {
    return true;
  } else if (sortedNums[midPoint] > searchNum) {
    sortedNums = sortedNums.slice(0, midPoint);
    return binarySearch(sortedNums, searchNum);
  } else {
    //plus one to not recheck the midpoint that we checked on line 77
    sortedNums = sortedNums.slice(midPoint + 1);
    return binarySearch(sortedNums, searchNum);
  }
}

console.log(binarySearch(two_nums1, two_searchNum1));
console.log(binarySearch(two_nums2, two_searchNum2));
console.log(binarySearch(two_nums3, two_searchNum3));
