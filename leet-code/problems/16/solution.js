/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b)
  let solutions = null;
  let length = nums.length;
  for (let index = 0; index < length; index++) {
    var first = nums[index];
    // 跳过相同的数字 因为之前肯定已经计算过了 相同数字意味着计算结果肯定也相同
    if (index && nums[index] === nums[index - 1]) {
      continue;
    }
    let [start, end] = [index + 1, length - 1];
    while (start < end) {
      var second = nums[start];
      var third = nums[end];
      let distance = first + second + third - target;
      // console.log(distance);
      // console.log(`${first} ${second} ${third}`);
      solutions = solutions === null ? distance : Math.abs(solutions) < Math.abs(distance) ? solutions : distance;
      if (distance > 0) {
        end--;
      } else if (distance < 0) {
        start++;
      } else {
        return target;
      }
    }
  }
  return solutions + target;
};

console.log(threeSumClosest([0,1,2],3));