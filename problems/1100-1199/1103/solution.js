/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function (candies, num_people) {
  const results = new Array(num_people).fill(0);
  let round = 0;
  let index = 0;
  while (candies > 0) {
    let c = num_people * round + (index + 1)
    if (c > candies) c = candies
    results[index] += c;
    candies -= c;
    index++;
    if (index >= num_people) { index = 0; round++ }
  }
  return results;
};


// TEST:
let candies = 10, num_people = 3;
console.log(distributeCandies(candies, num_people));
candies = 7, num_people = 4;
console.log(distributeCandies(candies, num_people))
