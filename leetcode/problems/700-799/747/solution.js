/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  let [largest, secondLarge] = [-1, -1];
  nums[-1] = -Infinity; //dummy element
  nums.forEach((num, index) => {
    if (num > nums[largest]) {
      [largest, secondLarge] = [index, largest];
    } else if (num > nums[secondLarge]) {
      secondLarge = index;
    }
  });
  return nums[largest] >= nums[secondLarge] * 2 ? largest : -1;
};