/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
  let numbers = [];
  for (let i = 0; i < nums.length; i++) {
    numbers.push(nums[nums[i]]);
  }
  return numbers;
};
