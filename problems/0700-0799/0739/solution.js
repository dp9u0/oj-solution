/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
  const results = new Array(T.length).fill(0)
  const stack = [];
  for (let i = 0; i < T.length; i++) {
    const t = T[i];
    while (stack.length && T[stack[stack.length - 1]] < t) {
      let j = stack.pop();
      results[j] = i - j;
    }
    stack.push(i);
  }
  return results;
};

// TEST:
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))
