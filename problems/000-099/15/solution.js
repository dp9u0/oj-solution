/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b)
  let solutions = [];
  let length = nums.length;
  for (let index = 0; index < length; index++) {
    var first = nums[index];
    // 跳过相同的数字 因为之前肯定已经计算过了 相同数字意味着计算结果肯定也相同
    if (index && first === nums[index - 1]) {
      continue;
    }
    let target = -first;
    let [start, end] = [index + 1, length - 1];
    while (start < end) {
      var second = nums[start];
      var third = nums[end];
      let sum = second + third;
      if (sum > target) {
        end--;
      } else
      if (sum < target) {
        start++;
      } else {
        solutions.push([first, second, third]);
        // 跳过相同的数字
        while (second === nums[start + 1]) {
          start++;
        }
        // 跳过相同的数字
        while (third === nums[end - 1]) {
          end--;
        }
        start++;
        end--;
      }
    }
  }
  return solutions;
};

console.log(threeSum([-4, -2, 1, -5, -4, -4, 4, -2, 0, 4, 0, -2, 3, 1, -5, 0]));