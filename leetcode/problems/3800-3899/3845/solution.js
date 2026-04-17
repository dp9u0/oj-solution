/*
 * @lc app=leetcode id=3845 lang=javascript
 *
 * [3845] Maximum Subarray XOR with Bounded Range
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxXor = function(nums, k) {
    const n = nums.length;
    const prefix = new Int16Array(n + 1);
    for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] ^ nums[i];

    const BITS = 15;
    const nodes = [[-1, -1, 0]]; // [child0, child1, count]
    let nc = 1;

    const insert = (val) => {
        let node = 0;
        nodes[node][2]++;
        for (let i = BITS - 1; i >= 0; i--) {
            const bit = (val >> i) & 1;
            if (nodes[node][bit] === -1) {
                nodes.push([-1, -1, 0]);
                nodes[node][bit] = nc++;
            }
            node = nodes[node][bit];
            nodes[node][2]++;
        }
    };

    const remove = (val) => {
        let node = 0;
        nodes[node][2]--;
        for (let i = BITS - 1; i >= 0; i--) {
            node = nodes[node][(val >> i) & 1];
            nodes[node][2]--;
        }
    };

    const query = (val) => {
        let node = 0, result = 0;
        for (let i = BITS - 1; i >= 0; i--) {
            const bit = (val >> i) & 1;
            const want = 1 - bit;
            const child = nodes[node][want];
            if (child !== -1 && nodes[child][2] > 0) {
                result |= (1 << i);
                node = child;
            } else {
                node = nodes[node][bit];
            }
        }
        return result;
    };

    let l = 0, ans = 0;
    const maxDq = [], minDq = [];

    for (let r = 0; r < n; r++) {
        insert(prefix[r]);

        while (maxDq.length && maxDq[maxDq.length - 1] < nums[r]) maxDq.pop();
        maxDq.push(nums[r]);
        while (minDq.length && minDq[minDq.length - 1] > nums[r]) minDq.pop();
        minDq.push(nums[r]);

        while (maxDq[0] - minDq[0] > k) {
            remove(prefix[l]);
            if (maxDq[0] === nums[l]) maxDq.shift();
            if (minDq[0] === nums[l]) minDq.shift();
            l++;
        }

        ans = Math.max(ans, query(prefix[r + 1]));
    }

    return ans;
};
// @lc code=end

// TEST:
console.log(maxXor([5, 4, 5, 6], 2));   // 7
console.log(maxXor([5, 4, 5, 6], 1));   // 6
console.log(maxXor([1], 0));            // 1
console.log(maxXor([1, 2, 3, 4], 3));   // 7
console.log(maxXor([8, 1, 2, 12, 7, 6], 5)); // some value
