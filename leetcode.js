/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let num = [];
  for (let i = 0; i < nums.length; i++) {
    var current = 0;
    for (let j = 0; j <= i; j++) {
      current += nums[j]; //[1,2,3,4]
    }
    num.push(current);
  }
  console.log(num);
};
