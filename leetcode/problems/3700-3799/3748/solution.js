/*
 * @lc app=leetcode id=3748 lang=javascript
 *
 * [3748] Count Stable Subarrays
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var countStableSubarrays = function(nums, queries) {
    const n = nums.length;
    // L[i]: leftmost index of the non-decreasing run ending at i
    const L = new Array(n);
    L[0] = 0;
    for (let i = 1; i < n; i++) {
        L[i] = nums[i] >= nums[i - 1] ? L[i - 1] : i;
    }

    // ans[l,r] = sum_{i=l}^{r} (i + 1 - max(L[i], l))
    // = sum_{i=l}^{r}(i+1) - sum_{i=l}^{r} max(L[i], l)
    // Part 1 = prefixIdx[r+1] - prefixIdx[l] + (r-l+1)
    // Part 2: for switched (L[i] < l): max = l; for unswitched (L[i] >= l): max = L[i]
    //   sum = switchedCount * l + (totalL - switchedSumL)

    const prefixIdx = new Array(n + 1);
    prefixIdx[0] = 0;
    for (let i = 0; i < n; i++) prefixIdx[i + 1] = prefixIdx[i] + i;

    const prefixL = new Array(n + 1);
    prefixL[0] = 0;
    for (let i = 0; i < n; i++) prefixL[i + 1] = prefixL[i] + L[i];

    // BIT for switched positions: count and sum of L[i]
    const bitCnt = new Array(n + 1).fill(0);
    const bitSum = new Array(n + 1).fill(0);

    const bitAdd = (pos, c, s) => {
        for (pos++; pos <= n; pos += pos & -pos) {
            bitCnt[pos] += c;
            bitSum[pos] += s;
        }
    };
    const bitQuery = (pos) => {
        let c = 0, s = 0;
        for (pos++; pos > 0; pos -= pos & -pos) {
            c += bitCnt[pos];
            s += bitSum[pos];
        }
        return [c, s];
    };
    const bitRange = (l, r) => {
        if (l > r) return [0, 0];
        const [c1, s1] = bitQuery(r);
        const [c2, s2] = l > 0 ? bitQuery(l - 1) : [0, 0];
        return [c1 - c2, s1 - s2];
    };

    // Group positions by switch point: at l = L[i]+1
    const switchAt = Array.from({ length: n + 1 }, () => []);
    for (let i = 0; i < n; i++) {
        if (L[i] < i) switchAt[L[i] + 1].push(i);
    }

    const q = queries.length;
    const order = Array.from({ length: q }, (_, i) => i);
    order.sort((a, b) => queries[a][0] - queries[b][0]);

    const ans = new Array(q);
    let curL = 0;

    for (const qi of order) {
        const [l, r] = queries[qi];
        while (curL <= l) {
            for (const pos of switchAt[curL]) bitAdd(pos, 1, L[pos]);
            curL++;
        }

        const [sc, sL] = bitRange(l, r);
        const totalLen = r - l + 1;
        const idxSum = prefixIdx[r + 1] - prefixIdx[l];
        const lSum = prefixL[r + 1] - prefixL[l];

        const maxSum = sc * l + (lSum - sL);
        ans[qi] = idxSum + totalLen - maxSum;
    }

    return ans;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(countStableSubarrays([3, 1, 2], [[0, 1], [1, 2], [0, 2]]))); // [2,3,4]
console.log(JSON.stringify(countStableSubarrays([2, 2], [[0, 1], [0, 0]]))); // [3,1]
console.log(JSON.stringify(countStableSubarrays([1, 2, 3], [[0, 2]]))); // [6]
console.log(JSON.stringify(countStableSubarrays([3, 2, 1], [[0, 2]]))); // [3]
console.log(JSON.stringify(countStableSubarrays([1], [[0, 0]]))); // [1]
