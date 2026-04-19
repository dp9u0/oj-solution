/**
 * @param {number[]} A
 * @return {string}
 */
var largestTimeFromDigits = function (A) {
  let time = "";
  let maxs = [3, 4, 6, 10];
  let nums = [...A];
  for (let i = 0; i < 4; i++) {
    let max = index = -1;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] < maxs[i] && nums[j] > max) {
        [max, index] = [nums[j], j];
      }
    }
    if (max === -1) {
      // 还可以拯救一下 [2,0,6,6] => 06:26
      if (i > 0 && (time[0] === "2")) {
        [i, time, nums, maxs[0], maxs[1]] = [-1, "", [...A], 2, 10];
        continue;
      } else {
        break;
      }
    }
    if (i === 0 && max < 2) {
      maxs[1] = 10;
    }
    time += max;
    nums.splice(index, 1);
  }
  return time.length === 4 ? `${time[0]}${time[1]}:${time[2]}${time[3]}` : "";
};

/**
// TEST:
console.log(largestTimeFromDigits([4, 0, 0, 0]))
console.log(largestTimeFromDigits([0, 0, 1, 0]))
console.log(largestTimeFromDigits([4, 4, 4, 4]))
console.log(largestTimeFromDigits([0, 5, 0, 5]))
console.log(largestTimeFromDigits([5, 5, 5, 5]))
console.log(largestTimeFromDigits([5, 9, 2, 3]))
console.log(largestTimeFromDigits([3, 3, 2, 3]))
console.log(largestTimeFromDigits([3, 3, 3, 3]))
console.log(largestTimeFromDigits([5, 9, 1, 9]))
console.log(largestTimeFromDigits([3, 1, 3, 1]))
console.log(largestTimeFromDigits([1, 0, 5, 9]))
console.log(largestTimeFromDigits([1, 0, 5, 0]))
console.log(largestTimeFromDigits([9, 5, 9, 0]))
console.log(largestTimeFromDigits([1, 9, 6, 0]))
console.log(largestTimeFromDigits([2, 0, 6, 6]))
console.log(largestTimeFromDigits([2, 2, 4, 2]))
console.log(largestTimeFromDigits([1, 2, 4, 3]))
console.log(largestTimeFromDigits([1, 2, 3, 4]))
*/