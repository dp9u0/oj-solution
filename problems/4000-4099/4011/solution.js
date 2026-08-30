/*
 * @lc app=leetcode id=4011 lang=javascript
 *
 * [4011] Count Subarrays With Even Odd Ratio I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var countRatioSubarrays = function(nums, a, b) {
    const n = nums.length;
    // w[i] = b (偶数) / -a (奇数)，合法子数组 <=> 区间和 <= 0（y=0 时 b*x>0 必不满足，故 y>0 自动成立）
    const prefix = [0];
    for (let i = 0; i < n; i++) {
        prefix.push(prefix[i] + (nums[i] % 2 === 0 ? b : -a));
    }
    // 统计 i < j 且 prefix[i] >= prefix[j] 的对数（非严格逆序对），BIT + 离散化
    const sorted = [...new Set(prefix)].sort((x, y) => x - y);
    const m = sorted.length;
    const tree = new Array(m + 1).fill(0);
    const update = (i) => {
        for (; i <= m; i += i & -i) tree[i]++;
    };
    const query = (i) => {
        let s = 0;
        for (; i > 0; i -= i & -i) s += tree[i];
        return s;
    };
    // lowerBound(v)：离散化数组中严格小于 v 的元素个数
    const lowerBound = (v) => {
        let lo = 0, hi = m;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (sorted[mid] < v) lo = mid + 1;
            else hi = mid;
        }
        return lo;
    };

    let ans = 0;
    update(lowerBound(prefix[0]) + 1); // 先插入 P[0]
    for (let j = 1; j <= n; j++) {
        const k = lowerBound(prefix[j]);       // 严格小于 P[j] 的值域前缀
        ans += j - query(k);                   // 已插入 j 个值，减去 < P[j] 的个数
        update(k + 1);
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(countRatioSubarrays([1, 2, 1, 2], 3, 2) === 7);
console.log(countRatioSubarrays([2, 2, 1], 2, 1) === 3);
console.log(countRatioSubarrays([2, 2, 2], 1, 1) === 0);
console.log(countRatioSubarrays([1], 1, 1) === 1);                    // 单奇数：0/1 合法
console.log(countRatioSubarrays([2], 1, 1) === 0);                    // 单偶数：y=0 不合法
console.log(countRatioSubarrays([2, 1, 2, 2], 1, 2) === 1);           // 仅 [1]:0/1 合法
console.log(countRatioSubarrays([1, 1, 1, 1], 1, 3) === 10);          // 全奇数，所有子数组均合法
