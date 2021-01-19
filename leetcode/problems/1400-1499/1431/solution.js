/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let max = 0;
  candies.forEach(c => { max = Math.max(max, c) });
  return candies.map(c => c + extraCandies >= max);
};


// TEST:
console.log(kidsWithCandies([2, 3, 5, 1, 3], 3))
console.log(kidsWithCandies([4, 2, 1, 1, 2], 1))
console.log(kidsWithCandies([12, 1, 12], 10))

