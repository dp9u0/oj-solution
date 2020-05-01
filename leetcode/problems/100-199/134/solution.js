/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let totalGas = gas.reduce((p, gas) => p + gas, 0);
  let totalCost = cost.reduce((p, cost) => p + cost, 0);
  if (totalGas < totalCost) return -1; // 说明一定没有解
  // 一定有解
  let start = 0;
  let rest = 0; // 剩余
  for (let i = 0; i < gas.length; i++) {
    rest += gas[i] - cost[i];
    if (rest < 0) {
      rest = 0;
      start = i + 1;
    }
  }
  return start;
};

// TEST:
console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]))
console.log(canCompleteCircuit([3, 3, 4], [3, 4, 4]))
