/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let index = Math.abs(nums[i]) - 1;
    nums[index] = nums[index] > 0 ? -nums[index] : nums[index];
  }
  let res = [];
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] > 0) {
      res.push(j + 1);
    }
  }
  return res;
};

/**
// TEST: 
console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))
*/