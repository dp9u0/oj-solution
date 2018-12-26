/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let start = null,
    end = null;
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (i === 0 || nums[i] !== nums[i - 1] + 1) {
      start = nums[i];
    }
    if (i === nums.length - 1 || nums[i] + 1 !== nums[i + 1]) {
      end = nums[i];
    }

    if (start !== null && end != null) {
      result.push(start === end ? `${start}` : `${start}->${end}`);
      start = null,
        end = null;
    }
  }
  return result;
};