/*
 * @lc app=leetcode id=1505 lang=javascript
 *
 * [1505] Minimum Possible Integer After at Most K Adjacent Swaps On Digits
 */

// @lc code=start
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var minInteger = function(num, k) {
    const n = num.length;

    // Fenwick Tree (1-indexed)
    const bit = new Int32Array(n + 1);
    const add = (i, v) => { for (; i <= n; i += i & -i) bit[i] += v; };
    const sum = (i) => { let s = 0; for (; i > 0; i -= i & -i) s += bit[i]; return s; };

    // Queues for each digit 0-9
    const queues = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < n; i++) {
        queues[parseInt(num[i])].push(i);
    }

    const result = [];
    for (let step = 0; step < n; step++) {
        for (let d = 0; d <= 9; d++) {
            if (queues[d].length === 0) continue;
            const j = queues[d][0]; // original position
            // Cost = current position of j = j - (removed before j)
            const cost = j - sum(j); // sum(j) = removed count in [0, j-1]
            if (cost <= k) {
                result.push(d);
                k -= cost;
                add(j + 1, 1); // mark position j as used
                queues[d].shift();
                break;
            }
        }
    }

    return result.join('');
};
// @lc code=end

// TEST:
console.log(minInteger("4321", 4)); // "1342"
console.log(minInteger("100", 1)); // "010"
console.log(minInteger("36789", 1000)); // "36789"
console.log(minInteger("9438957234785635408", 23)); // "0345989723478563548"
