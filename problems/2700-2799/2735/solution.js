/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minCost = function(nums, x) {
    const n = nums.length;
    // minCosts[i] 表示收集第 i 种类型巧克力的最小成本
    const minCosts = [...nums];
    let result = nums.reduce((sum, cost) => sum + cost, 0);

    // 尝试执行 k 次操作（k 从 1 到 n-1）
    for (let k = 1; k < n; k++) {
        let totalCost = k * x; // 操作成本

        // 对于每种类型 i，更新其最小获取成本
        for (let i = 0; i < n; i++) {
            // 执行 k 次操作后，类型 i 会出现在索引 (i - k + n) % n 处
            const newIndex = (i - k + n) % n;
            minCosts[i] = Math.min(minCosts[i], nums[newIndex]);
            totalCost += minCosts[i];
        }

        result = Math.min(result, totalCost);
    }

    return result;
};

// TEST:
console.log(minCost([20, 1, 15], 5)); // Expected: 13
console.log(minCost([1, 2, 3], 4)); // Expected: 6
console.log(minCost([15, 150, 56, 69, 214, 203], 42)); // Expected: 298