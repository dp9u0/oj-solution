/*
 * @lc app=leetcode.cn id=4051 lang=javascript
 *
 * [4051] 统计遥远子数组的数目
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} goal
 * @param {number} k
 * @return {number}
 */
var distantSubarrays = function(nums, goal, k) {
    const n = nums.length;
    // k = 0: |sum - goal| >= 0 always holds, all subarrays are distant
    if (k === 0) return n * (n + 1) / 2;

    // Prefix sums: subarray (i, j] has sum P[j] - P[i]
    const prefix = new Array(n + 1);
    prefix[0] = 0;
    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }

    // Distant condition for pair (i, j), i < j:
    //   P[j] - P[i] - goal >= k  OR  P[j] - P[i] - goal <= -k
    //   <=> P[i] <= P[j] - goal - k  OR  P[i] >= P[j] + goal offset ... (see query below)
    // The two ranges are disjoint when k > 0, so no double counting.

    // Coordinate-compress all prefix sums
    const sorted = Array.from(prefix).sort((a, b) => a - b);
    const vals = [sorted[0]];
    for (let i = 1; i <= n; i++) {
        if (sorted[i] !== sorted[i - 1]) vals.push(sorted[i]);
    }
    const m = vals.length;

    // Fenwick tree over compressed value indices (1-based)
    const tree = new Array(m + 1).fill(0);
    const update = (pos) => {
        for (; pos <= m; pos += pos & (-pos)) tree[pos]++;
    };
    const query = (pos) => {
        let sum = 0;
        for (; pos > 0; pos -= pos & (-pos)) sum += tree[pos];
        return sum;
    };

    const bisectLeft = (x) => {
        let lo = 0, hi = m;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (vals[mid] < x) lo = mid + 1;
            else hi = mid;
        }
        return lo;
    };
    const bisectRight = (x) => {
        let lo = 0, hi = m;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (vals[mid] <= x) lo = mid + 1;
            else hi = mid;
        }
        return lo;
    };

    let inserted = 0;
    const insertVal = (v) => {
        update(bisectLeft(v) + 1);
        inserted++;
    };

    let ans = 0;
    insertVal(prefix[0]);
    for (let j = 1; j <= n; j++) {
        const s = prefix[j];
        // count P[i] <= s - goal - k
        ans += query(bisectRight(s - goal - k));
        // count P[i] >= s - goal + k  (among the `inserted` earlier prefix sums)
        ans += inserted - query(bisectLeft(s - goal + k));
        insertVal(s);
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(distantSubarrays([1, 2, 1], 4, 1)); // Expected: 5
console.log(distantSubarrays([2, -1, 3], 2, 2)); // Expected: 2
console.log(distantSubarrays([-3, 1, 2], 0, 3)); // Expected: 2
console.log(distantSubarrays([1, 2, 1], 4, 0)); // Expected: 6 (k=0, all subarrays)
console.log(distantSubarrays([5], 5, 1)); // Expected: 0
console.log(distantSubarrays([0, 0, 0], 0, 1)); // Expected: 0
console.log(distantSubarrays([1, -1, 2], 1, 1)); // Expected: 4
