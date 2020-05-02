/**
 * @param {number[]} nums
 * @return {number}
 */
let maximumGap = function (nums) {
  let length = nums.length;
  let maxDigits = 0;
  for (let i = 0; i < length; i++) {
    let n = nums[i];
    maxDigits = Math.max(maxDigits, n === 0 ? 1 : ~~(Math.log10(n)) + 1);
  }
  // 排序
  for (let i = 0; i < maxDigits; i++) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < length; j++) {
      let digit = ~~(nums[j] / Math.pow(10, i) % 10);
      buckets[digit].push(nums[j]);
    }
    nums = [].concat(...buckets);
  }
  let maxGap = 0;
  for (let j = 1; j < length; j++) {
    maxGap = Math.max(maxGap, nums[j] - nums[j - 1]);
  }
  return maxGap;
}

// TEST:
console.log(maximumGap([3, 6, 9, 1]))
console.log(maximumGap([3, 6, 9, 1000000]))
console.log(maximumGap([10]))
