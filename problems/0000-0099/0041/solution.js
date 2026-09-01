/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  let length = nums.length;
  let lentghPlus1 = length + 1;
  // 第一次循环将 大于length的以及负数的排除掉 : 设置为 0
  for (let index = 0; index < length; index++) {
    const element = nums[index];
    if (element > length || element <= 0) {
      nums[index] = 0;
    }
  }
  // 第二次循环将 target = nums[element - 1] 位置设置为负数 : nums[element - 1] = - (nums[element - 1])
  // 这样 只需要判断负数的index + 1的数字是存在的
  // 需要注意的是 :
  // 如果 element 是负数 说明element已经被置负过了 需要置正 然后再处理  nums[element - 1]
  // 如果 target 是负数 说明target已经被置负过了 不需要处理了
  for (let index = 0; index < length; index++) {
    let element = nums[index];
    element = element < 0 ? -(element) : element;
    let target = nums[element - 1] || lentghPlus1;
    if (element && element !== lentghPlus1 && target >= 0) {
      nums[element - 1] = -(target || lentghPlus1);
    }
  }

  // console.log(nums);

  let result = 0;

  while (nums[result] < 0 && result < length) {
    result++;
  }

  return result + 1;
};

console.log(firstMissingPositive([3, 4, -1, 1]));
console.log(firstMissingPositive([1, 2, 0]));