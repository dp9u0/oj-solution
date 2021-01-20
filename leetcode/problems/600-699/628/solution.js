/**
 * maximum product
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  let max1 = Number.NEGATIVE_INFINITY, max2 = Number.NEGATIVE_INFINITY, max3 = Number.NEGATIVE_INFINITY;
  let min1 = Number.POSITIVE_INFINITY, min2 = Number.POSITIVE_INFINITY;
  nums.forEach(x => {
    // 更新最大值
    if (x < min1) {
      min2 = min1;
      min1 = x;
    } else if (x < min2) {
      min2 = x;
    }
    // 更新最大值
    if (x > max1) {
      max3 = max2;
      max2 = max1;
      max1 = x;
    } else if (x > max2) {
      max3 = max2;
      max2 = x;
    } else if (x > max3) {
      max3 = x;
    }
  });
  return Math.max(max1 * max2 * max3, min1 * min2 * max1)
};


// TEST:
console.log(maximumProduct([1, 2, 3]))
console.log(maximumProduct([1, 2, 3, 4]))
console.log(maximumProduct([-1, -2, -3]))
console.log(maximumProduct([-100, -98, -1, 2, 3, 4]))