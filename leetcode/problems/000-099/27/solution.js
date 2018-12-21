/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let count = 0;
  let replaceIndex;
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (element === val) {
      nums[index] = null;
      (replaceIndex >= 0 || (replaceIndex = index));
    } else {
      count++;
      if (replaceIndex >= 0) {
        nums[replaceIndex] = element;
        nums[index] = null;
        // find a replacement index
        // console.log()
        while (nums[replaceIndex] !== null) {
          replaceIndex++;
        }
      }
    }
    // console.log(`${nums} : ${replaceIndex}`);
  }
  return count;
};

// let nums = [1, 1, 2]
// console.log(removeDuplicates(nums))
// console.log(nums)

let nums = [3, 2, 2, 3]


console.log(removeElement(nums, 3))
console.log(nums)