/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  let length = ratings.length;
  const candies = new Array(length).fill(1);
  // 比左侧大
  for (let i = 1; i < length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1;
    }
  }
  // 比右侧大
  for (let j = length - 2; j >= 0; j--) {
    if (ratings[j] > ratings[j + 1]) {
      candies[j] = Math.max(candies[j + 1] + 1, candies[j]);
    }
  }
  return candies.reduce((p, v) => p + v, 0);
};

// TEST:
console.log(candy([1, 0, 2]));
console.log(candy([1, 2, 2]));
