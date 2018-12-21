/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let count = 0;
  let preElement;
  let replaceIndex;
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (element === preElement) {
      nums[index] = null;
      (replaceIndex || (replaceIndex = index));
    } else {
      count++;
      preElement = element;
      if (replaceIndex) {
        nums[replaceIndex] = element;
        nums[index] = null;
        // find a replacement index
        console.log()
        while (nums[replaceIndex] !== null) {
          replaceIndex++;
        }
      }
    }
    console.log(`${nums} : ${replaceIndex}`);
  }
  return count;
};

// let nums = [1, 1, 2]
// console.log(removeDuplicates(nums))
// console.log(nums)

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

console.log(removeDuplicates(nums))
console.log(nums)