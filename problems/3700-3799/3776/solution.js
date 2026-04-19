/*
 * @lc app=leetcode id=3776 lang=javascript
 *
 * [3776] Minimum Moves to Balance Circular Array
 */

// @lc code=start
/**
 * @param {number[]} balance
 * @return {number}
 */
var minMoves = function(balance) {
    const n = balance.length;
    const negIdx = balance.findIndex(b => b < 0);
    if (negIdx === -1) return 0;

    if (balance.reduce((a, b) => a + b, 0) < 0) return -1;

    const deficit = -balance[negIdx];
    const suppliers = [];
    for (let i = 0; i < n; i++) {
        if (balance[i] > 0) {
            const dist = Math.min((negIdx - i + n) % n, (i - negIdx + n) % n);
            suppliers.push([balance[i], dist]);
        }
    }

    suppliers.sort((a, b) => a[1] - b[1]);

    let need = deficit, moves = 0;
    for (const [supply, dist] of suppliers) {
        const take = Math.min(supply, need);
        moves += take * dist;
        need -= take;
        if (need === 0) break;
    }

    return need > 0 ? -1 : moves;
};
// @lc code=end

// TEST:
console.log(minMoves([5,1,-4])); // 4
console.log(minMoves([1,2,-5,2])); // 6
console.log(minMoves([-3,2])); // -1
console.log(minMoves([1,1])); // 0
console.log(minMoves([10,-1])); // 1
console.log(minMoves([3,-2,1])); // 2
