//intersting way to solve it.
/*  217. Contains Duplicate
https://leetcode.com/problems/contains-duplicate/description/
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true


Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let uniqueNums = new Set(nums);
  return uniqueNums.size != nums.length ? true : false;
};

//fastest way to solve the problem.
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let uniqueNums = new Set();
  for (let num of nums) {
    if (uniqueNums.has(num)) {
      return true;
    } else {
      uniqueNums.add(num);
    }
  }
  return false;
};

const nums = [1, 2, 3, 1];
console.log(containsDuplicate(nums));
