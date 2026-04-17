/*
 * @lc app=leetcode id=3814 lang=javascript
 *
 * [3814] Maximum Capacity Within Budget
 */

// @lc code=start
/**
 * @param {number[]} costs
 * @param {number[]} capacity
 * @param {number} budget
 * @return {number}
 */
var maxCapacity = function(costs, capacity, budget) {
    const n = costs.length;
    const machines = costs.map((c, i) => ({cost: c, cap: capacity[i]}));
    machines.sort((a, b) => a.cost - b.cost);

    const prefMax = new Array(n);
    prefMax[0] = machines[0].cap;
    for (let i = 1; i < n; i++) {
        prefMax[i] = Math.max(prefMax[i - 1], machines[i].cap);
    }

    let ans = 0;

    // Single machine
    for (let i = 0; i < n; i++) {
        if (machines[i].cost < budget) {
            ans = Math.max(ans, machines[i].cap);
        }
    }

    // Two machines: for each i, binary search best j < i with cost[j] < budget - cost[i]
    for (let i = 1; i < n; i++) {
        const remain = budget - machines[i].cost;
        if (remain <= 0) continue;
        let lo = 0, hi = i - 1, best = -1;
        while (lo <= hi) {
            const mid = (lo + hi) >> 1;
            if (machines[mid].cost < remain) {
                best = mid;
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }
        if (best >= 0) {
            ans = Math.max(ans, machines[i].cap + prefMax[best]);
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(maxCapacity([4,8,5,3], [1,5,2,7], 8));     // 8
console.log(maxCapacity([3,5,7,4], [2,4,3,6], 7));     // 6
console.log(maxCapacity([2,2,2], [3,5,4], 5));          // 9
console.log(maxCapacity([1], [10], 2));                  // 10
console.log(maxCapacity([5,5], [1,2], 5));               // 0
