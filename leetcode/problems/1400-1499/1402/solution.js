/**
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function (satisfaction) {
  satisfaction.sort((a, b) => b - a);
  let sum = 0; // s1 + s2 + s3
  let result = 0; // sum(1)+sum(2)+ sum(3)
  for (let i = 0; i < satisfaction.length; i++) {
    const s = satisfaction[i];
    if (sum + s > 0) {
      sum += s;
      result += sum;
    } else {
      break;
    }
  }
  return result;
};


// TEST:
console.log(maxSatisfaction([-1, -8, 0, 5, -9]))
console.log(maxSatisfaction([4, 3, 2]))
console.log(maxSatisfaction([-1, -4, -5]))
console.log(maxSatisfaction([-2, 5, -1, 0, 3, -3]))
