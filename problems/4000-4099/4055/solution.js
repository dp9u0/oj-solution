/*
 * @lc app=leetcode.cn id=4055 lang=javascript
 *
 * [4055] 统计影子数对 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var shadowPairs = function(nums) {
    const n = nums.length;

    // 树状数组：add / 前缀和 / 第 k 小
    const makeBIT = (size) => {
        const tree = new Array(size + 1).fill(0);
        return {
            add(pos) { for (; pos <= size; pos += pos & (-pos)) tree[pos]++; },
            query(pos) { let s = 0; for (; pos > 0; pos -= pos & (-pos)) s += tree[pos]; return s; },
            // 第 k 小（1-based），返回原下标
            kth(k) {
                let pos = 0;
                for (let bit = 1 << Math.ceil(Math.log2(size + 1)); bit > 0; bit >>= 1) {
                    const next = pos + bit;
                    if (next <= size && tree[next] < k) { k -= tree[next]; pos = next; }
                }
                return pos + 1;
            }
        };
    };

    const bisectLeft = (arr, x) => {
        let lo = 0, hi = arr.length;
        while (lo < hi) { const mid = (lo + hi) >> 1; if (arr[mid] < x) lo = mid + 1; else hi = mid; }
        return lo;
    };

    // 递归求解 [lo, hi]，返回区间内影子对数
    const solve = (lo, hi) => {
        if (hi - lo < 1) return 0;
        const mid = (lo + hi) >> 1;
        let ans = solve(lo, mid) + solve(mid + 1, hi);

        // 左半 [lo, mid]，右半 [mid+1, hi]
        const leftVals = nums.slice(lo, mid + 1).sort((a, b) => a - b);
        const rightVals = nums.slice(mid + 1, hi + 1).sort((a, b) => a - b);

        // b[i]：左半中 i 之后 > nums[i] 的最小值，无则 Infinity
        const uniqL = [...new Set(leftVals)];
        const bitL = makeBIT(uniqL.length);
        const b = new Array(mid - lo + 1);
        for (let i = mid; i >= lo; i--) {
            const p = bisectLeft(uniqL, nums[i]);
            // 后继必须严格 > nums[i]：统计 <= nums[i] 的已插入个数（含同值），kth(cnt+1) 才是第一个更大的
            const cnt = bitL.query(p + 1);
            b[i - lo] = cnt < bitL.query(uniqL.length) ? uniqL[bitL.kth(cnt + 1) - 1] : Infinity;
            bitL.add(p + 1);
        }

        // c[j]：右半中 j 之前 < nums[j] 的最大值，无则 -Infinity
        const uniqR = [...new Set(rightVals)];
        const bitR = makeBIT(uniqR.length);
        const c = new Array(hi - mid);
        for (let j = mid + 1; j <= hi; j++) {
            const p = bisectLeft(uniqR, nums[j]);
            const cnt = bitR.query(p); // 已插入且严格小于 nums[j] 的个数
            c[j - mid - 1] = cnt > 0 ? uniqR[bitR.kth(cnt) - 1] : -Infinity;
            bitR.add(p + 1);
        }

        // 跨半计数：条件 c[j] <= nums[i] < nums[j] <= b[i]
        // Fenwick 建在左半值域上
        const uniqV = [...new Set(leftVals)];
        const bit = makeBIT(uniqV.length);
        // 左端按 b 降序，右端按 nums[j] 降序
        const idxL = [];
        for (let i = lo; i <= mid; i++) idxL.push(i);
        idxL.sort((x, y) => b[y - lo] - b[x - lo]);
        const idxR = [];
        for (let j = mid + 1; j <= hi; j++) idxR.push(j);
        idxR.sort((x, y) => nums[y] - nums[x]);

        let ptr = 0;
        for (const j of idxR) {
            // 激活 b[i] >= nums[j] 的左端（b 降序，指针推进）
            while (ptr < idxL.length && b[idxL[ptr] - lo] >= nums[j]) {
                bit.add(bisectLeft(uniqV, nums[idxL[ptr]]) + 1);
                ptr++;
            }
            // 查询值域 [c[j], nums[j]) 内已插入的 i 数
            const hiPos = bisectLeft(uniqV, nums[j]);
            const loPos = c[j - mid - 1] === -Infinity ? 0 : bisectLeft(uniqV, c[j - mid - 1]);
            ans += bit.query(hiPos) - bit.query(loPos);
        }
        return ans;
    };

    return solve(0, n - 1);
};
// @lc code=end

// TEST:
console.log(shadowPairs([3, 1, 4, 2, 5])); // Expected: 5
console.log(shadowPairs([1, 2, 3, 4])); // Expected: 3 (only adjacent pairs survive)
console.log(shadowPairs([4, 3, 2, 1])); // Expected: 0
console.log(shadowPairs([1, 1, 1])); // Expected: 0
console.log(shadowPairs([2, 1, 3])); // Expected: 2
console.log(shadowPairs([1, 3, 2, 4])); // Expected: 4
console.log(shadowPairs([8, 8, 8, 8])); // Expected: 0 (strict less required)
