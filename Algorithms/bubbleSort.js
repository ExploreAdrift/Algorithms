/* 
  https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/
  Stable sort
  
  Time Complexity
    - Best: O(n) linear when array is already sorted.
    - Average: O(n^2) quadratic.
    - Worst: O(n^2) quadratic when the array is reverse sorted.
  Space: O(1) constant.
  For review, create a function that uses BubbleSort to sort an unsorted array in-place.
  For every pair of adjacent indices, swap them if the item on the left is larger than the item on the right until array is fully sorted
*/

const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts the given nums in-place by mutating the array.
 * Best: O(n) linear when array is already sorted.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic when the array is reverse sorted.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given nums after being sorted.
 */
function bubbleSort(nums) {
  //iterate through, move first item in array and compare to others.
  //stop when it's not greater than element to right of it
  let swapHolder;
  //outter for loop, is to repeat passes over entire length of array
  for (let k = 0; k < nums.length; k++) {
    //this is the code for moving a number each pass
    console.log(`on ${k}th pass`);
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > nums[i + 1]) {
        //swap shenanigans
        swapHolder = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = swapHolder;
        console.log(nums);
      }
    }
  }
  return nums;
}
//console.log(numsRandomOrder);
//console.log(bubbleSort(numsRandomOrder));
